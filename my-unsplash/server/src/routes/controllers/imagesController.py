from functools import wraps
from flask import request

from ..services.imagesServices import ImageService
from ..services.usersServices import UserService
from ..commons.send_errors import send_internal_error, send_invalid_error
from ..commons.valid_user_data import valid_user_data
from ..commons.check_extensions import check_extensions


def upload_image_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.files['img_file']
                user_id, user_password = request.form['user_id'], request.form['user_password']
                title = request.form['title']

                if not req:
                    return send_invalid_error('Could not upload', 'Image is missing')

                valid_extension = check_extensions(server, req.filename)

                if valid_extension is False:
                    return send_invalid_error('Could not upload', 'Image extension not allowed.')

                service_user = UserService(server, user_password, _id=user_id)

                owner = service_user.login_user()

                valid_user = valid_user_data(owner, user_password)

                if valid_user is True:

                    service = ImageService(server)

                    response = service.upload_image(req, title, owner)

                    if response['ok'] is False:
                        return send_invalid_error('Image could`t be created.', response['error'])

                    return func()

                return valid_user

            except Exception as error:
                return send_internal_error(error)

        return wrapper
    return decorator


def get_images_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.args.get('image')

                service = ImageService(
                    server
                )

                if len(req) is 32:
                    response = service.get_images(_id=req)

                elif req == 'all':
                    response = service.get_images(_all=True)

                else:
                    return send_invalid_error('Could not get images',
                                              'Server need an argument "_id" with length 32 or "_all" for get images')

                if response['ok'] is True:
                    return func({'images': response['images']})

            except Exception as error:
                send_internal_error(error)

        return wrapper
    return decorator
