from flask import make_response, jsonify

from .controllers.imagesController import upload_image_controller, get_images_controller


def images_routes(server):
    @server.route('/image/get', methods=['GET'])
    @get_images_controller(server)
    def get(response):
        return make_response(
            jsonify(response),
            200
        )

    @server.route('/image/upload', methods=['POST'])
    @upload_image_controller(server)
    def upload():
        return make_response(
            'Image successfully uploaded',
            200
        )
