from sqlalchemy import insert
from uuid import uuid4
from datetime import datetime

from .commons.get_table import get_table


class UserService:
    def __init__(self, server, email, password, firstname=None, lastname=None):
        self.server = server.config
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password

    def create_new_user(self):
        try:
            engine = self.server['DB_ENGINE']
            user_table = get_table(engine, 'users')
            uuid = uuid4().hex
            datetime_now = datetime.now()

            new_user = insert(user_table).values(
                id=uuid,
                firstname=self.firstname,
                lastname=self.lastname,
                email=self.email,
                password=self.password,
                created_at=datetime_now
            )
            engine.connect()
            engine.execute(new_user)
            print(' * {} {} created successfully'.format(self.firstname, self.lastname))
            return {'ok': True}
        except Exception as error:
            print(' * Error when trying to create user: {}'.format(error))
            return {'ok': False, 'error': error}
