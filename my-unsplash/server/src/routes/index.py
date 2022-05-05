from .users import users_routes


def set_routes(server):
    users_routes(server)
