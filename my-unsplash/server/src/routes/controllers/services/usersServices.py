from sqlalchemy import insert

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
            new_user = insert(user_table).values(firstname=self.firstname,
                                                 lastname=self.lastname,
                                                 email=self.email,
                                                 password=self.password)

            engine.connect()
            engine.execute(new_user)
            print(' * {} {} created successfully'.format(self.firstname, self.lastname))
        except Exception as error:
            print(' * Error when trying to create user: {}'.format(error))
