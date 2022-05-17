from .send_errors import send_invalid_error
from .hash_password import verify_password


def valid_user_data(service, password):
    if service is None:
        return send_invalid_error('Invalid data', 'User does`t exist')

    valid_password = verify_password(password, service[4])

    if valid_password is False:
        return send_invalid_error('Invalid password', 'Password is invalid. Try again')

    return True
