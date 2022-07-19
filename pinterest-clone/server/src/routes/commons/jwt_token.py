import jwt
from datetime import datetime, timedelta


def create_token(email, secret_key):
    try:
        payload = {
            'exp': datetime.utcnow() + timedelta(minutes=40),
            'iat': datetime.utcnow(),
            'sub': email
        }

        token = jwt.encode(
            payload,
            secret_key,
            algorithm='HS256'
        )

        return {'ok': True, 'token': token}
    except Exception as error:
        return {'ok': False, 'error': error}
