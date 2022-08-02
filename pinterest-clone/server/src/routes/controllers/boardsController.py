from functools import wraps
from flask import request

from ..services.boardsServices import BoardsService
from ..commons.send_errors import send_internal_error, send_invalid_error


def get_board_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                owner = req['user_id']

                service = BoardsService(server, owner=owner)

                user_boards = service.get_boards()

                if user_boards['ok'] is False:
                    return send_invalid_error(user_boards['error'])

                return func(user_boards['boards'])

            except Exception as error:
                return send_internal_error(error)

        return wrapper

    return decorator


def create_board_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
 
                title, owner = req['title'], req['owner']

                service = BoardsService(server, title, owner)

                new_board = service.create_board()

                if new_board['ok'] is False:
                    return send_invalid_error(new_board['error'])

                return func(new_board['msg'])

            except Exception as error:
                return send_internal_error(error)

        return wrapper

    return decorator


def add_pin_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                board_id, pin_id = req['board_id'], req['pin_id']

                if not board_id or not pin_id:
                    return send_invalid_error('Data is missing')

                service = BoardsService(server, board_id=board_id, pin_id=pin_id)

                response = service.pin_to_board()

                if response['ok'] is False:
                    return send_invalid_error(response['error'])

                return func(response['msg'])

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
                pin_id = req['pin_id']

                if not pin_id:
                    return send_invalid_error('Pin id is missing')

                service = BoardsService(server, pin_id=pin_id)

                response = service.delete_pin_in_board()

                if response['ok'] is False:
                    return send_invalid_error(response['error'])

                return func(response['msg'])

            except Exception as error:
                return send_internal_error(error)

        return wrapper
    return decorator


def delete_board_controller(server):
    def decorator(func):
        @wraps(func)
        def wrapper():
            try:
                req = request.json
                board_id = req['board_id']

                if not board_id:
                    return send_invalid_error('Board id is missing')

                service = BoardsService(server, board_id=board_id)

                response = service.delete_board()

                if response['ok'] is False:
                    return send_invalid_error(response['error'])

                return func(response['msg'])

            except Exception as error:
                send_internal_error(error)

        return wrapper
    return decorator

