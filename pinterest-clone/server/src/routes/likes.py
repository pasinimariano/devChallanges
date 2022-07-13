from flask import make_response, jsonify

from .middlewares.token_validator import token_validator
from .middlewares.validateData import validate_data
from .commons.schemas import like_pin_schema


def likes_routes(server):
    @server.route('/like', methods=['POST'])
    @token_validator(server)
    @validate_data(like_pin_schema)
    def like(response):
        return make_response(
            response,
            200
        )

    @server.route('/deslike', methods=['DELETE'])
    @token_validator(server)
    def deslike(response):
        return make_response(
            response,
            200
        )
