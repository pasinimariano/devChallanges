from flask import make_response, jsonify

from .middlewares.token_validator import token_validator
from .middlewares.validateData import validate_data
from .commons.schemas import add_pin_schema
from .controllers.boardsController import get_board_controller, create_board_controller, add_pin_controller
from .controllers.boardsController import delete_board_controller, delete_pin_controller


def boards_routes(server):
    @server.route('/board', methods=['GET'])
    @token_validator(server)
    @get_board_controller(server)
    def get_board(response):
        return make_response(
            jsonify(response),
            200
        )

    @server.route('/board/create', methods=['POST'])
    @token_validator(server)
    @create_board_controller(server)
    def create_board(response):
        return make_response(
            response,
            200
        )

    @server.route('/board/delete', methods=['DELETE'])
    @token_validator(server)
    @delete_board_controller(server)
    def delete_board(response):
        return make_response(
            response,
            200
        )

    @server.route('/board/pinit', methods=['POST'])
    @token_validator(server)
    @validate_data(add_pin_schema)
    @add_pin_controller(server)
    def add_pin_board(response):
        return make_response(
            response,
            200
        )

    @server.route('/board/delete/pin', methods=['DELETE'])
    @token_validator(server)
    @delete_pin_controller(server)
    def delete_pin_board(response):
        return make_response(
            response,
            200
        )
