import cloudinary.uploader
from uuid import uuid4
from werkzeug.utils import secure_filename

from ..commons.get_table import get_table
from ..commons.execute_query import execute_query


class PinsService:
    def __init__(self, server, owner=None, _id=None):
        self.server = server
        self.engine = server.config['DB_ENGINE']
        self.pins_table = get_table(self.engine, 'pines')
        self.owners_table = get_table(self.engine, 'users')
        self.likes_table = get_table(self.engine, 'likes')
        self.owner = owner
        self._id = _id

    def upload_pin(self, file, title):
        try:
            id_generator = uuid4().hex
            mimetype = file.mimetype
            url = cloudinary.uploader.upload(file, folder='pines')
            filename = secure_filename(file.filename)

            query = self.pins_table.insert().values(
                id=id_generator,
                mimetype=mimetype,
                url=url["secure_url"],
                name=filename,
                title=title,
                owner=self.owner.id
            )

            result = execute_query(self.engine, query)

            print(' * Image created at {}'.format(result))
            print(' * Image {} created successfully'.format(filename))
            return {'ok': True}

        except Exception as error:
            print(' * Error when trying to create image: {}'.format(error))
            return {'ok': False, 'error': error}

    def get_all_pins(self):
        try:
            query = self.pins_table.join(self.owners_table, self.pins_table.c.owner == self.owners_table.c.id).select()

            result = execute_query(self.engine, query)
            response = []

            for row in result:
                owner = '{} {}'.format(row['firstname'], row['lastname'])
                pin = {
                    'id': row['id'],
                    'url': row['url'],
                    'title': row['title'],
                    'likes': row['likes'],
                    'owner': owner,
                    'owner_picture': row['profile_picture']
                }
                response.append(pin)

            return {'ok': True, 'pins': response}

        except Exception as error:
            print(' * Error when trying to get all pins: {}'.format(error))
            return {'ok': False, 'error': error}

    def get_pin_by_id(self):
        try:
            query = self.pins_table\
                .join(self.owners_table, self.pins_table.c.owner == self.owners_table.c.id)\
                .select().where(self.pins_table.c.id == self._id)

            result = execute_query(self.engine, query)

            for row in result:
                owner = '{} {}'.format(row['firstname'], row['lastname'])
                pin = {
                    'id': row['id'],
                    'url': row['url'],
                    'title': row['title'],
                    'likes': row['likes'],
                    'description': row['description'],
                    'owner': owner,
                    'owner_picture': row['profile_picture']
                }

                return {'ok': True, 'pin': pin}

        except Exception as error:
            print(' * Error when trying to get pin: {}'.format(error))
            return {'ok': False, 'error': error}

    def update_pin_data(self, title, description=None):
        try:
            query = self.pins_table.update().where(self.pins_table.c.id == self._id).values(
                title=title,
                description=description
            )

            execute_query(self.engine, query)

            response = self.get_pin_by_id()

            print(' * Pin {} updated successfully'.format(self._id))
            return {'ok': True, 'pin': response}

        except Exception as error:
            print(' * Error when trying to update pin: {}'.format(error))
            return {'ok': False, 'error': error}

    def update_pin(self, file):
        try:
            mimetype = file.mimetype
            url = cloudinary.uploader.upload(file, folder='pines')
            filename = secure_filename(file.filename)

            query = self.pins_table.update().where(self.pins_table.c.id == self._id).values(
                mimetype=mimetype,
                url=url["secure_url"],
                name=filename,
            )

            execute_query(self.engine, query)

            response = self.get_pin_by_id()

            print(' * Pin {} updated successfully'.format(self._id))
            return {'ok': True, 'pin': response}

        except Exception as error:
            print(' * Error when trying to update pin: {}'.format(error))
            return {'ok': False, 'error': error}

    def delete_pin(self):
        try:
            query = self.pins_table.delete().where(self.pins_table.c.id == self._id)

            execute_query(self.engine, query)

            return {'ok': True, 'msg': 'Pin deleted successfully'}

        except Exception as error:
            print(' * Error when trying to delete pin: {}'.format(error))
            return {'ok': False, 'error': error}
