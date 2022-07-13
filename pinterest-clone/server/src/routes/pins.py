from flask import make_response, jsonify

from .middlewares.token_validator import token_validator
from .middlewares.validateData import validate_pin_post
from .commons.schemas import upload_pin_schema
from .controllers.pinsController import upload_pin_controller, get_all_controller, get_by_id_controller
from .controllers.pinsController import update_data_controller, update_pin_controller, delete_pin_controller


def pins_routes(server):
    @server.route('/pin/upload', methods=['POST'])
    @token_validator(server)
    @validate_pin_post(upload_pin_schema)
    @upload_pin_controller(server)
    def upload():
        return make_response(
            'Pin successfully uploaded',
            200
        )

    @server.route('/pin/all', methods=['GET'])
    @token_validator(server)
    @get_all_controller(server)
    def get_all(response):
        return make_response(
            jsonify(response),
            200
        )

    @server.route('/pin', methods=['GET'])
    @token_validator(server)
    @get_by_id_controller(server)
    def get_by_id(response):
        return make_response(
            jsonify(response),
            200
        )

    @server.route('/pin/update/data', methods=['PUT'])
    @token_validator(server)
    @update_data_controller(server)
    def update_data(response):
        return make_response(
            jsonify(response),
            200
        )

    @server.route('/pin/update', methods=['PUT'])
    @token_validator(server)
    @update_pin_controller(server)
    def update_pin(response):
        return make_response(
            jsonify(response),
            200
        )

    @server.route('/pin/delete', methods=['DELETE'])
    @token_validator(server)
    @delete_pin_controller(server)
    def delete_pin(response):
        return make_response(
            response,
            200
        )