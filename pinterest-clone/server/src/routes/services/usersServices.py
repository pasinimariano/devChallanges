from uuid import uuid4
import cloudinary.uploader

from ..commons.get_table import get_table


class UserService:
    def __init__(self, server, password, email=None, firstname=None, lastname=None, _id=None):
        self.engine = server.config['DB_ENGINE']
        self.user_table = get_table(self.engine, 'users')
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password
        self._id = _id

    def create_new_user(self):
        try:
            id_generator = uuid4().hex
            query = self.user_table.insert().values(
                id=id_generator,
                firstname=self.firstname,
                lastname=self.lastname,
                email=self.email,
                password=self.password,
            )
            self.engine.connect()
            self.engine.execute(query)

            print(' * {} {} created successfully'.format(self.firstname, self.lastname))
            return {'ok': True}
        except Exception as exception:
            format_error = str(exception.__dict__['orig'])
            my_slice = slice(6, -1)
            error = format_error[my_slice]
            print(' * Error when trying to create user: {}'.format(exception))
            return {'ok': False, 'error': error}

    def login_user(self):
        if self._id is None:
            query = self.user_table.select().where(self.user_table.c.email == self.email)
        else:
            query = self.user_table.select().where(self.user_table.c.id == self._id)

        self.engine.connect()
        for row in self.engine.execute(query):
            return row

    def delete_user(self):
        query = self.user_table.delete().where(self.user_table.c.email == self.email)
        self.engine.connect()
        self.engine.execute(query)
        return 'User {} deleted'.format(self.email)

    def update_user(self):
        try:
            query = self.user_table.update().where(self.user_table.c.id == self._id).values(
                email=self.email,
                firstname=self.firstname,
                lastname=self.lastname,
            )
            self.engine.connect()
            self.engine.execute(query)

            response = self.login_user()

            print(' * User {} updated successfully'.format(self._id))
            return {'ok': True, 'user': response}

        except Exception as error:
            print(' * Error when trying to update user: {}'.format(error))
            return {'ok': False, 'error': error}

    def update_password(self, password):
        try:
            query = self.user_table.update().where(self.user_table.c.id == self._id).values(
                password=password
            )
            self.engine.connect()
            self.engine.execute(query)
            return {'ok': True, 'msg': 'Password updated successfully'}

        except Exception as error:
            print(' * Error when trying to update password: {}'. format(error))
            return {'ok': False, 'error': error}

    def update_profile_picture(self, image):
        try:
            url = cloudinary.uploader.upload(image, folder='profile_pictures')
            query = self.user_table.update().where(self.user_table.c.id == self._id).values(
                profile_picture=url["secure_url"]
            )
            self.engine.connect()
            self.engine.execute(query)

            response = self.login_user()

            print(' * Profile picture {} updated successfully'.format(self._id))
            return {'ok': True, 'user': response}

        except Exception as error:
            print(' * Error when trying to update profile image: {}'.format(error))
            return {'ok': False, 'error': error}


