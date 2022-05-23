from .users import users_routes
from .images import images_routes


def set_routes(server):
    users_routes(server)
    images_routes(server)
