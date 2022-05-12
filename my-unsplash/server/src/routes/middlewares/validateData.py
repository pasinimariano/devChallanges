import sys
from cerberus import Validator
from functools import wraps
from flask import request

from ..commons.send_errors import send_invalid_error

sys.path.append('../commons')


def validate_data(schema):
    def decorator(func):
        @wraps(func)
        def wrapper():
            validator = Validator()
            req = request.json
            res = validator.validate(req, schema)

            if res is False:
                return send_invalid_error(validator.errors, 'Invalid data')

            return func()
        return wrapper
    return decorator
