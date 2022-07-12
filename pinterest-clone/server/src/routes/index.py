from .users import users_routes
from .pins import pins_routes


def set_routes(server):
    users_routes(server)
    pins_routes(server)
