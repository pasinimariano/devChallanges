from .users import users_routes
from .pins import pins_routes
from .likes import likes_routes
from .comments import comments_route


def set_routes(server):
    users_routes(server)
    pins_routes(server)
    likes_routes(server)
    comments_route(server)
