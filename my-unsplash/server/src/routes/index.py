from .users import user_routes


def set_routes(server):
    user_routes(server)
