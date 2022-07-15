from flask import make_response, jsonify

from .middlewares.token_validator import token_validator
from .middlewares.validateData import validate_data
from .commons.schemas import add_comment_schema, put_comment_schema
from .controllers.commentsController import add_comment_controller, update_comment_controller, delete_comment_controller


def comments_route(server):
    @server.route('/addcomment', methods=['POST'])
    @token_validator(server)
    @validate_data(add_comment_schema)
    @add_comment_controller(server)
    def add_comment(response):
        return make_response(
            response,
            200
        )

    @server.route('/updatecomment', methods=['PUT'])
    @token_validator(server)
    @validate_data(put_comment_schema)
    @update_comment_controller(server)
    def update_comment(response):
        return make_response(
            response,
            200
        )

    @server.route('/deletecomment', methods=['DELETE'])
    @token_validator(server)
    @delete_comment_controller(server)
    def delete_comment(response):
        return make_response(
            response,
            200
        )



