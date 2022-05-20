from .send_errors import send_invalid_error
from .hash_password import verify_password


def valid_user_data(login, password):
    if login is None:
        return send_invalid_error('User does`t exist')

    valid_password = verify_password(password, login[4])

    if valid_password is False:
        return send_invalid_error('Incorrect password')

    return True
