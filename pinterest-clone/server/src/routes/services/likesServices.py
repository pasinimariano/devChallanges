from uuid import uuid4

from ..commons.get_table import get_table
from ..commons.execute_query import execute_query


class LikesServices:
    def __init__(self, server, user_id=None, pin_id=None, like_id=None):
        self.server = server
        self.engine = server.config['DB_ENGINE']
        self.likes_table = get_table(self.engine, 'likes')
        self.user_id = user_id
        self.pin_id = pin_id
        self.like_id = like_id

    def like_pin(self):
        try:
            id_generator = uuid4().hex

            query = self.likes_table.insert().values(
                id=id_generator,
                owner=self.user_id,
                pin=self.pin_id
            )

            result = execute_query(self.engine, query)

            print(' * Like created at {}'.format(result))
            print(' * Pin {} Liked'.format(self.pin_id))
            return {'ok': True, 'msg': 'Pin liked'}

        except Exception as error:
            return {'ok': False, 'error': error}

    def deslike_pin(self):
        try:
            query = self.likes_table.delete().where(
                self.likes_table.c.id == self.like_id
            )

            execute_query(self.engine, query)

            return {'ok': True, 'msg': 'Pin desliked'}

        except Exception as error:
            return {'ok': False, 'error': error}
