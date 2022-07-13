from functools import wraps
from flask import request

from ..services.likesServices import LikesServices
from ..commons.send_errors import send_internal_error, send_invalid_error


def like_pin_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                user_id, pin_id = req['user_id'], req['pin_id']

                service = LikesServices(server, user_id, pin_id)

                like = service.like_pin()

                if like['ok'] is False:
                    return send_invalid_error(like['error'])

                return func(like['msg'])

            except Exception as error:
                send_internal_error(error)

        return wrapper
    return decorator


def deslike_pin_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                like_id = req['like_id']

                service = LikesServices(server, like_id=like_id)

                deslike = service.deslike_pin()

                if deslike['ok'] is False:
                    return send_invalid_error(deslike['error'])

                return func(deslike['msg'])

            except Exception as error:
                send_internal_error(error)

        return wrapper
    return decorator


def get_pin_likes_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                print('pepe')

            except Exception as error:
                send_internal_error(error)