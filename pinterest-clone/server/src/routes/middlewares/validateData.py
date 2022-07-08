from cerberus import Validator
from functools import wraps
from flask import request

from ..commons.send_errors import send_invalid_error


def validate_data(schema):
    def decorator(func):
        @wraps(func)
        def wrapper():
            validator = Validator()
            req = request.json
            res = validator.validate(req, schema)
            if res is False:
                return send_invalid_error(validator.errors)

            return func()
        return wrapper
    return decorator


def validate_profile_picture(schema):
    def decorator(func):
        @wraps(func)
        def wrapper():
            validator = Validator()
            image = request.files
            form = request.form
            req = {'id': form['id'], 'password': form['password'], 'image': image['image']}
            res = validator.validate(req, schema)

            if res is False:
                return send_invalid_error(validator.errors)

            return func()
        return wrapper
    return decorator


def validate_post(schema):
    def decorator(func):
        @wraps(func)
        def wrapper():
            validator = Validator()
            image = request.files
            form = request.form
            req = {'id': form['id'], 'password': form['password'], 'image': image['image']}
            res = validator.validate(req, schema)

            if res is False:
                return send_invalid_error(validator.errors)

            return func()
        return wrapper
    return decorator
