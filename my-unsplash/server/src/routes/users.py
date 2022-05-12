from flask import make_response, jsonify

from .middlewares.validateData import validate_data
from .middlewares.token_validator import token_validator
from .commons.schemas import create_user_schema, login_user_schema, update_user_schema
from .controllers.usersController import *


def users_routes(server):
    @server.route('/user/create', methods=['POST'])
    @validate_data(create_user_schema)
    @create_user_controller(server)
    def create():
        return make_response(
            'User {} created successfully'.format(request.json['email']),
            200
        )

    @server.route('/user/login', methods=['GET'])
    @validate_data(login_user_schema)
    @login_user_controller(server)
    def login(response):
        return make_response(
            jsonify(response),
            200
        )

    @server.route('/user/delete', methods=['DELETE'])
    @token_validator(server)
    @validate_data(login_user_schema)
    @delete_user_controller(server)
    def delete(response):
        return make_response(
            response,
            200
        )

    @server.route('/user/update', methods=['PUT'])
    @token_validator(server)
    @validate_data(update_user_schema)
    @update_user_controller(server)
    def update(response):
        return make_response(
            response,
            200
        )

