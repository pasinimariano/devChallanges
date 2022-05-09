from functools import wraps
from flask import request, make_response

from .services.usersServices import UserService
from .commons.hash_password import hash_password


def create_user_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                hashed_password = hash_password(req['password'])
                service = UserService(
                    server,
                    req['email'],
                    hashed_password,
                    req['firstname'],
                    req['lastname'],
                )

                response = service.create_new_user()

                if response['ok'] is False:
                    print(' * Invalid request = {}'.format(response['error']))
                    return make_response(
                        'Invalid request = {}'.format(response['error']),
                        400,
                        {'WWW-Authenticate': 'User could`t be created.'}
                    )

            except Exception as error:
                print(' * Internal server error = {}'.format(error))
                return make_response(
                    'Internal error',
                    500,
                    {'WWW-Authenticate': 'Internal server error'}
                )

            return func()
        return wrapper
    return decorator
