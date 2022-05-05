from .middlewares.validateData import validate_data
from .middlewares.schemas import create_user_schema
from .controllers.usersController import create_user_controller


def users_routes(server):
    @server.route('/user/create', methods=['GET'])
    @validate_data(create_user_schema)
    @create_user_controller(server)
    def test():
        return 'HELLO WORLD'
