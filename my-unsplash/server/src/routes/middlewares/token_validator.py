import jwt
from flask import request
from functools import wraps

from ..commons.send_errors import send_invalid_error


def token_validator(server):
    def decorator(func):
        @wraps(func)
        def token_required():
            token = request.args.get('token')

            if not token or token is None:
                return send_invalid_error('Could not verify', 'Token is missing')

            try:
                jwt.decode(token, server.config['SECRET_KEY'], algorithms=["HS256"])

            except jwt.ExpiredSignatureError:
                return send_invalid_error('Could not verify', 'Token is expired')

            except jwt.InvalidTokenError:
                return send_invalid_error('Could not verify', 'Token is invalid')

            return func()
        return token_required
    return decorator

