from functools import wraps
from flask import request

from ..services.usersServices import UserService
from ..commons.hash_password import hash_password, verify_password
from ..commons.send_errors import send_internal_error, send_invalid_error
from ..commons.jwt_token import create_token
from ..commons.valid_user_data import valid_user_data


def create_user_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                email, password, firstname, lastname = req['email'], req['password'], req['firstname'], req['lastname']
                hashed_password = hash_password(password)

                service = UserService(
                    server,
                    hashed_password,
                    email,
                    firstname,
                    lastname,
                )

                new_user = service.create_new_user()

                if new_user['ok'] is False:
                    return send_invalid_error(new_user['error'])

                return func(new_user['msg'])

            except Exception as error:
                return send_internal_error(error)

        return wrapper
    return decorator


def login_user_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                email, password = req['email'], req['password']

                service = UserService(
                    server,
                    password,
                    email
                )

                login = service.login_user()

                if login['ok'] is False:
                    return send_invalid_error(login['error'])

                valid_user = valid_user_data(login['user'], password)

                if valid_user is True:

                    token = create_token(email, server.config['SECRET_KEY'])

                    if token['ok'] is False:
                        send_internal_error(token['error'])

                    user_id, user_firstname = login['user'][0], login['user'][1]
                    user_lastname, user_email = login['user'][2], login['user'][3]
                    profile_picture = login['user'][5]
                    likes = login['likes']

                    response = {
                        'token': token['token'],
                        'user': {
                            '_id': user_id,
                            'firstname': user_firstname,
                            'lastname': user_lastname,
                            'email': user_email,
                            'picture': profile_picture,
                            'likes': likes
                        }
                    }

                    return func(response)
                
                return valid_user

            except Exception as error:
                return send_internal_error(error)

        return wrapper
    return decorator


def delete_user_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                email, password = req['email'], req['password']

                service = UserService(
                    server,
                    password,
                    email
                )

                login = service.login_user()

                if login['ok'] is False:
                    return send_invalid_error(login['error'])

                valid_user = valid_user_data(login['user'], password)

                if valid_user is True:
                    user_delete = service.delete_user()

                    if user_delete['ok'] is False:
                        return send_invalid_error(user_delete['error'])

                    return func(user_delete['msg'])

                return valid_user

            except Exception as error:
                send_internal_error(error)

        return wrapper
    return decorator


def update_user_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                email, password = req['email'], req['password']
                firstname, lastname, _id = req['firstname'], req['lastname'], req['id']

                service = UserService(
                    server,
                    password,
                    email,
                    firstname,
                    lastname,
                    _id
                )

                login = service.login_user()

                if login['ok'] is False:
                    return send_invalid_error(login['error'])

                valid_user = valid_user_data(login['user'], password)

                if valid_user is True:
                    update = service.update_user()

                    if update['ok'] is True:
                        user_firstname, user_lastname = update['user'][1], update['user'][2]
                        user_email = update['user'][3]

                        response = {
                            'msg': 'User updated successfully',
                            'user': {
                                'firstname': user_firstname,
                                'lastname': user_lastname,
                                'email': user_email,
                            }
                        }

                        return func(response)

                    else:
                        send_invalid_error(update['error'])

                return valid_user

            except Exception as error:
                send_internal_error(error)

        return wrapper
    return decorator


def update_password_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                _id, password, new_password = req['id'], req['password'], req['new_password']

                service = UserService(
                    server,
                    password,
                    _id=_id,
                )

                login = service.login_user()

                if login['ok'] is False:
                    return send_invalid_error(login['error'])

                valid_user = valid_user_data(login['user'], password)

                if valid_user is True:
                    hashed_password = hash_password(new_password)
                    response = service.update_password(hashed_password)

                    return func(response)

                return valid_user

            except Exception as error:
                send_internal_error(error)

        return wrapper
    return decorator


def update_picture_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                image = request.files['image']
                req = request.form
                _id, password = req['id'], req['password']

                service = UserService(
                    server,
                    password,
                    _id=_id
                )

                login = service.login_user()

                if login['ok'] is False:
                    return send_invalid_error(login['error'])

                valid_user = valid_user_data(login['user'], password)

                if valid_user is True:
                    update = service.update_profile_picture(image)

                    if update['ok'] is True:
                        profile_picture = update['user'][5]

                        response = {
                            'msg': 'Profile picture updated successfully',
                            'profile:picture': profile_picture
                        }

                        return func(response)

                    else:
                        send_invalid_error(update['error'])

                return valid_user

            except Exception as error:
                send_internal_error(error)

        return wrapper
    return decorator
