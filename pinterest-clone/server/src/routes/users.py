from flask import make_response, jsonify

from .middlewares.validateData import validate_data, validate_profile_picture
from .middlewares.token_validator import token_validator
from .commons.schemas import create_user_schema, login_user_schema, update_user_schema
from .commons.schemas import update_password_schema, update_picture_schema
from .controllers.usersController import *


def users_routes(server):
    @server.route('/user/create', methods=['POST'])
    @validate_data(create_user_schema)
    @create_user_controller(server)
    def create(response):
        return make_response(
            response,
            200
        )

    @server.route('/user/login', methods=['POST'])
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

    @server.route('/user/password', methods=['PUT'])
    @token_validator(server)
    @validate_data(update_password_schema)
    @update_password_controller(server)
    def update_password(response):
        return make_response(
            response,
            200
        )

    @server.route('/user/picture', methods=['PUT'])
    @token_validator(server)
    @validate_profile_picture(update_picture_schema)
    @update_picture_controller(server)
    def update_picture(response):
        return make_response(
            response,
            200
        )
