from uuid import uuid4
from datetime import datetime

from .commons.get_table import get_table


class UserService:
    def __init__(self, server, email, password, firstname=None, lastname=None):
        self.engine = server.config['DB_ENGINE']
        self.user_table = get_table(self.engine, 'users')
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password

    def create_new_user(self):
        try:
            uuid = uuid4().hex
            datetime_now = datetime.now()

            new_user = self.user_table.insert().values(
                id=uuid,
                firstname=self.firstname,
                lastname=self.lastname,
                email=self.email,
                password=self.password,
                created_at=datetime_now
            )
            self.engine.connect()
            self.engine.execute(new_user)

            print(' * {} {} created successfully'.format(self.firstname, self.lastname))
            return {'ok': True}
        except Exception as error:
            print(' * Error when trying to create user: {}'.format(error))
            return {'ok': False, 'error': error}

    def login_user(self):
        user = self.user_table.select().where(self.user_table.c.email == self.email)
        self.engine.connect()
        for row in self.engine.execute(user):
            return row

