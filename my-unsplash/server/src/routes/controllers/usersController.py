import sys
from functools import wraps
from flask import request

from ..services.usersServices import UserService
from ..commons.hash_password import hash_password, verify_password
from ..commons.send_errors import send_internal_error, send_invalid_error
from ..commons.jwt_token import create_token
from ..commons.valid_user_data import valid_user_data

sys.path.append('../services')
sys.path.append('../commons')


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
                    email,
                    hashed_password,
                    firstname,
                    lastname,
                )

                new_user = service.create_new_user()

                if new_user['ok'] is False:
                    return send_invalid_error(new_user['error'], 'User could`t be created.')

            except Exception as error:
                return send_internal_error(error)

            return func()
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
                    email,
                    password
                )

                login = service.login_user()

                valid_user = valid_user_data(login, email, password)

                if valid_user is True:

                    token = create_token(email, server.config['SECRET_KEY'])

                    if token['ok'] is False:
                        send_internal_error(token['error'])

                    user_id, user_firstname = login[0], login[1]
                    user_lastname, user_email = login[2], login[3]

                    response = {
                        'token': token['token'],
                        'user': {
                            '_id': user_id,
                            'firstname': user_firstname,
                            'lastname': user_lastname,
                            'email': user_email
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
                    email,
                    password
                )

                user = service.login_user()

                valid_user = valid_user_data(user, email, password)

                if valid_user is True:

                    user_delete = service.delete_user()

                    return func(user_delete)

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
                    email,
                    password,
                    firstname,
                    lastname,
                    _id
                )

                user = service.login_user(_id)

                valid_user = valid_user_data(user, email, password)

                if valid_user is True:

                    if 'new_password' in req:
                        hashed_password = hash_password(req['new_password'])
                        response = service.update_user(hashed_password)
                    else:
                        hashed_password = hash_password(password)
                        response = service.update_user(hashed_password)

                    return func(response)

                return valid_user

            except Exception as error:
                send_internal_error(error)

        return wrapper
    return decorator
