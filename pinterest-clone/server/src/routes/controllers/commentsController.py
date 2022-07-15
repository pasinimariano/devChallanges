from functools import wraps
from flask import request

from ..services.commentsServices import CommentsService
from ..commons.send_errors import send_internal_error, send_invalid_error


def add_comment_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                user_id, pin_id, post = req['user_id'], req['pin_id'], req['post']

                service = CommentsService(server, user_id, pin_id, post)

                result = service.add_comment()

                if result['ok'] is False:
                    return send_invalid_error(result['error'])

                func(result['msg'])

            except Exception as error:
                return send_internal_error(error)

        return wrapper
    return decorator


def update_comment_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                post, comment_id = req['post'], req['comment_id']

                service = CommentsService(server, post=post, comment_id=comment_id)

                result = service.update_comment()

                if result['ok'] is False:
                    return send_invalid_error(result['error'])

                return func(result['msg'])

            except Exception as error:
                return send_internal_error(error)

        return wrapper
    return decorator


def delete_comment_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                comment_id = req['comment_id']

                if not comment_id:
                    send_invalid_error('Id is missing')

                service = CommentsService(server, comment_id=comment_id)

                result = service.delete_comment()

                if result['ok'] is False:
                    return send_invalid_error(result['error'])

                return func(result['msg'])

            except Exception as error:
                return send_internal_error(error)

        return wrapper
    return decorator
