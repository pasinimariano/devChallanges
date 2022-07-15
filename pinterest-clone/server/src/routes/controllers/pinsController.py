from functools import wraps
from flask import request

from ..services.pinsServices import PinsService
from ..services.usersServices import UserService
from ..commons.send_errors import send_internal_error, send_invalid_error
from ..commons.valid_user_data import valid_user_data
from ..commons.check_extensions import check_extensions


def upload_pin_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                pin_file = request.files['pin_file']
                user_id, user_password = request.form['user_id'], request.form['user_password']
                title = request.form['title']

                if not pin_file:
                    return send_invalid_error('Pin is missing.')

                valid_extension = check_extensions(server, pin_file.filename)

                if valid_extension is False:
                    return send_invalid_error('Pin extension not allowed.')

                service_user = UserService(server, user_password, _id=user_id)

                owner = service_user.login_user()

                valid_user = valid_user_data(owner['user'], user_password)

                if valid_user is True:

                    service = PinsService(server, owner=owner['user'])

                    response = service.upload_pin(pin_file, title)

                    if response['ok'] is False:
                        return send_invalid_error(response['error'])

                    return func()

                return valid_user

            except Exception as error:
                return send_internal_error(error)

        return wrapper

    return decorator


def get_all_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                service = PinsService(server)

                response = service.get_all_pins()

                if response['ok'] is False:
                    return send_invalid_error(response['error'])

                return func(response['pins'])

            except Exception as error:
                return send_internal_error(error)

        return wrapper

    return decorator


def get_by_id_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                _id = request.args.get('id')

                if not _id:
                    return send_invalid_error('Id is missing')

                service = PinsService(server, _id=_id)

                response = service.get_pin_by_id()

                if response['ok'] is False:
                    return send_invalid_error(response['error'])

                return func(response['pin'])

            except Exception as error:
                return send_internal_error(error)
        return wrapper
    return decorator


def update_data_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.form
                title, description = req['title'], req['description']
                _id = request.args.get('id')

                if not title:
                    return send_invalid_error('Data is missing')

                if not _id:
                    return send_invalid_error('Id is missing')

                service = PinsService(server, _id=_id)

                response = service.update_pin_data(title, description)

                if response['ok'] is False:
                    return send_invalid_error(response['error'])

                return func(response['pin'])

            except Exception as error:
                return send_internal_error(error)
        return wrapper
    return decorator


def update_pin_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                pin_file = request.files['pin_file']
                _id = request.args.get('id')

                if not pin_file:
                    return send_invalid_error('File is missing')

                if not _id:
                    return send_invalid_error('Id is missing')

                service = PinsService(server, _id=_id)

                response = service.update_pin(pin_file)

                if response['ok'] is False:
                    return send_invalid_error(response['error'])

                return func(response['pin'])

            except Exception as error:
                return send_internal_error(error)
        return wrapper
    return decorator


def delete_pin_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                _id = req['id']

                if not _id:
                    return send_invalid_error('Id is missing')

                service = PinsService(server, _id=_id)

                response = service.delete_pin()

                if response['ok'] is False:
                    return send_invalid_error(response['error'])

                return func(response['msg'])

            except Exception as error:
                return send_internal_error(error)

        return wrapper
    return decorator
