from cerberus import Validator
from functools import wraps
from flask import request, make_response


def validate_data(schema):
    def decorator(func):
        @wraps(func)
        def wrapper():
            validator = Validator()
            req = request.json
            res = validator.validate(req, schema)

            if res is False:
                return make_response(
                    'Errors = {}'.format(validator.errors),
                    400,
                    {'WWW-Authenticate': 'Invalid Data'}
                )

            return func()
        return wrapper
    return decorator
