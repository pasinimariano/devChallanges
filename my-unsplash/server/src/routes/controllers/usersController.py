from functools import wraps
from flask import request

from .services.usersServices import UserService
from .commons.hash_password import hash_password, verify_password
from .commons.send_errors import send_internal_error, send_invalid_error
from .commons.jwt_token import create_token


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

                service_response = service.create_new_user()

                if service_response['ok'] is False:
                    return send_invalid_error(service_response['error'], 'User could`t be created.')

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

                service_response = service.login_user()

                if service_response is None:
                    return send_invalid_error('Invalid data', 'User {} does`t exist'.format(email))

                valid_password = verify_password(password, service_response[4])

                if valid_password is False:
                    return send_invalid_error('Invalid password', 'Password is invalid. Try again')

                token = create_token(email, server.config['SECRET_KEY'])

                if token['ok'] is False:
                    send_internal_error(token['error'])

                user_id, user_firstname = service_response[0], service_response[1]
                user_lastname, user_email = service_response[2], service_response[3]

                response = {
                    'token': token['token'],
                    'user': {
                        '_id': user_id,
                        'firstname': user_firstname,
                        'lastname': user_lastname,
                        'email': user_email
                    }
                }

            except Exception as error:
                return send_internal_error(error)

            return func(response)
        return wrapper
    return decorator
