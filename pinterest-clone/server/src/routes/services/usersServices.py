from uuid import uuid4
import cloudinary.uploader
import random

from ..commons.get_table import get_table
from ..commons.execute_query import execute_query


class UserService:
    def __init__(self, server, password, email=None, firstname=None, lastname=None, _id=None):
        self.engine = server.config['DB_ENGINE']
        self.user_table = get_table(self.engine, 'users')
        self.likes_table = get_table(self.engine, 'likes')
        self.pins_table = get_table(self.engine, 'pins')
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password
        self._id = _id

    def create_new_user(self):
        try:
            id_generator = uuid4().hex
            user_color = ['#'+''.join([random.choice('0123456789ABCDEF') for x in range(6)])]
            query = self.user_table.insert()\
                .values(
                    id=id_generator,
                    firstname=self.firstname,
                    lastname=self.lastname,
                    email=self.email,
                    password=self.password,
                    profile_picture=user_color
                )

            execute_query(self.engine, query)

            print(' * {} {} created successfully'.format(self.firstname, self.lastname))
            return {'ok': True, 'msg': 'Success'}

        except Exception as exception:
            format_error = str(exception.__dict__['orig'])
            my_slice = slice(6, -1)
            error = format_error[my_slice]
            print(' * Error when trying to create user: {}'.format(exception))
            return {'ok': False, 'error': error}

    def login_user(self):
        try:
            if self._id is None:
                query = self.user_table\
                    .join(self.likes_table, self.likes_table.c.owner == self.user_table.c.id, isouter=True)\
                    .join(self.pins_table, self.pins_table.c.owner == self.user_table.c.id, isouter=True)\
                    .select().where(self.user_table.c.email == self.email)
            else:
                query = self.user_table\
                    .join(self.likes_table, self.likes_table.c.owner == self.user_table.c.id, isouter=True) \
                    .join(self.pins_table, self.pins_table.c.owner == self.user_table.c.id, isouter=True) \
                    .select().where(self.user_table.c.id == self._id)

            result = execute_query(self.engine, query)
            user = {}
            password = ''

            for row in result:
                if bool(user) and row['id_1']:
                    user['data']['likes'].append(row['id_1'])

                elif bool(user) and row['id_2']:
                    user['data']['pins'].append(row['id_2'])

                else:
                    user['data'] = {
                        'id': row['id'],
                        'firstname': row['firstname'],
                        'lastname': row['lastname'],
                        'email': row['email'],
                        'profile_picture': row['profile_picture'],
                        'likes': [row['id_1']],
                        'pins': [row['id_2']]
                    }
                    password = row['password']

            return {'ok': True, 'user': user, 'password': password}

        except Exception as error:
            return {'ok': False, 'error': error}

    def delete_user(self):
        try:
            query = self.user_table.delete()\
                .where(self.user_table.c.email == self.email)

            execute_query(self.engine, query)

            return {'ok': True, 'msg': 'Success'}

        except Exception as error:
            return {'ok': False, 'error': error}

    def update_user(self):
        try:
            query = self.user_table.update().where(self.user_table.c.id == self._id).values(
                email=self.email,
                firstname=self.firstname,
                lastname=self.lastname,
            )

            execute_query(self.engine, query)

            response = self.login_user()

            print(' * User {} updated successfully'.format(self._id))
            return {'ok': True, 'user': response['user']}

        except Exception as error:
            print(' * Error when trying to update user: {}'.format(error))
            return {'ok': False, 'error': error}

    def update_password(self, password):
        try:
            query = self.user_table.update()\
                .where(self.user_table.c.id == self._id).values(
                    password=password
                )

            execute_query(self.engine, query)

            return {'ok': True, 'msg': 'Success'}

        except Exception as error:
            print(' * Error when trying to update password: {}'. format(error))
            return {'ok': False, 'error': error}

    def update_profile_picture(self, image):
        try:
            url = cloudinary.uploader.upload(image, folder='profile_pictures')
            query = self.user_table.update().where(self.user_table.c.id == self._id).values(
                profile_picture=url["secure_url"]
            )

            execute_query(self.engine, query)

            response = self.login_user()

            print(' * Profile picture {} updated successfully'.format(self._id))
            return {'ok': True, 'user': response['user']}

        except Exception as error:
            print(' * Error when trying to update profile image: {}'.format(error))
            return {'ok': False, 'error': error}


