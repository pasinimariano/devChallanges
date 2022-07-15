from uuid import uuid4

from ..commons.get_table import get_table
from ..commons.execute_query import execute_query


class CommentsService:
    def __init__(self, server, user_id=None, pin_id=None, post=None, comment_id=None):
        self.server = server
        self.engine = server.config['DB_ENGINE']
        self.comments_table = get_table(self.engine, 'comments')
        self.user_id = user_id
        self.pin_id = pin_id
        self.post = post
        self.comment_id = comment_id

    def add_comment(self):
        try:
            id_generator = uuid4().hex

            query = self.comments_table.insert().values(
                id=id_generator,
                owner=self.user_id,
                pin=self.pin_id,
                post=self.post
            )

            execute_query(self.engine, query)

            return {'ok': True, 'msg': 'Comment added success'}

        except Exception as error:
            return {'ok': False, 'error': error}

    def update_comment(self):
        try:
            query = self.comments_table.update().where(self.comments_table.c.id == self.comment_id).values(
                post=self.post
            )

            execute_query(self.engine, query)

            return {'ok': True, 'msg': 'Comment updated'}

        except Exception as error:
            return {'ok': False, 'error': error}

    def delete_comment(self):
        try:
            query = self.comments_table.delete().where(self.comments_table.c.id == self.comment_id)

            execute_query(self.engine, query)

            return {'ok': True, 'msg': 'Comment deleted'}

        except Exception as error:
            return {'ok': False, 'error': error}
