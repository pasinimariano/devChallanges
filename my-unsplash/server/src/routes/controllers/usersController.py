from functools import wraps
from flask import request

from .services.usersServices import UserService


def create_user_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            req = request.json
            service = UserService(
                server,
                req['email'],
                req['password'],
                req['firstname'],
                req['lastname'],
            )

            service.create_new_user()

            return func()
        return wrapper
    return decorator
