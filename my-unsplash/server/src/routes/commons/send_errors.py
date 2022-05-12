from flask import make_response


def send_internal_error(error):
    print(' * Internal server error = {}'.format(error))
    return make_response(
        'Internal error',
        500,
        {'WWW-Authenticate': 'Internal server error'}
    )


def send_invalid_error(error, msg):
    print(' * Invalid request = {}'.format(error))
    return make_response(
        'Invalid request = {}'.format(error),
        400,
        {'WWW-Authenticate': msg}
    )
