import sys
from uuid import uuid4
from datetime import datetime

from ..commons.get_table import get_table

sys.path.append('../commons')


class UserService:
    def __init__(self, server, email, password, firstname=None, lastname=None, _id=None):
        self.engine = server.config['DB_ENGINE']
        self.user_table = get_table(self.engine, 'users')
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password
        self._id = _id

    def create_new_user(self):
        try:
            uuid = uuid4().hex
            datetime_now = datetime.now()

            query = self.user_table.insert().values(
                id=uuid,
                firstname=self.firstname,
                lastname=self.lastname,
                email=self.email,
                password=self.password,
                created_at=datetime_now
            )
            self.engine.connect()
            self.engine.execute(query)

            print(' * {} {} created successfully'.format(self.firstname, self.lastname))
            return {'ok': True}
        except Exception as error:
            print(' * Error when trying to create user: {}'.format(error))
            return {'ok': False, 'error': error}

    def login_user(self, _id=None):
        if _id is None:
            query = self.user_table.select().where(self.user_table.c.email == self.email)
        else:
            query = self.user_table.select().where(self.user_table.c.id == _id)

        self.engine.connect()
        for row in self.engine.execute(query):
            return row

    def delete_user(self):
        query = self.user_table.delete().where(self.user_table.c.email == self.email)
        self.engine.connect()
        self.engine.execute(query)
        return 'User {} deleted'.format(self.email)

    def update_user(self, password):
        datetime_now = datetime.now()
        query = self.user_table.update().where(self.user_table.c.id == self._id).values(
            email=self.email,
            firstname=self.firstname,
            lastname=self.lastname,
            password=password,
            updated_at=datetime_now
        )
        self.engine.connect()
        self.engine.execute(query)
        return 'User {} updated successfully'.format(self._id)





