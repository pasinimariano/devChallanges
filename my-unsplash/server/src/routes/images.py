from flask import make_response, jsonify

from .middlewares.token_validator import token_validator
from .middlewares.validateData import validate_post
from .commons.schemas import upload_image_schema
from .controllers.imagesController import upload_image_controller, get_images_controller


def images_routes(server):
    @server.route('/image/get', methods=['GET'])
    @token_validator(server)
    @get_images_controller(server)
    def get(response):
        return make_response(
            jsonify(response),
            200
        )

    @server.route('/image/upload', methods=['POST'])
    @token_validator(server)
    @validate_post(upload_image_schema)
    @upload_image_controller(server)
    def upload():
        return make_response(
            'Image successfully uploaded',
            200
        )
