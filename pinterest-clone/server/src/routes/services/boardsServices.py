from uuid import uuid4

from ..commons.get_table import get_table
from ..commons.execute_query import execute_query


class BoardsService:
    def __init__(self, server, title=None, owner=None, board_id=None, pin_id=None):
        self.engine = server.config['DB_ENGINE']
        self.boards_table = get_table(self.engine, 'boards')
        self.pins_table = get_table(self.engine, 'pins')
        self.association_table = get_table(self.engine, 'association')
        self.title = title
        self.owner = owner
        self.board_id = board_id
        self.pin_id = pin_id

    def get_boards(self):
        try:
            query = self.boards_table \
                .join(
                    self.association_table, self.association_table.c.board_id == self.boards_table.c.id, isouter=True
                ).select().where(self.boards_table.c.owner == self.owner)

            response = execute_query(self.engine, query)
            boards = {}

            for row in response:
                pin = row['pin_id']

                if row['id'] in boards:
                    boards[row['id']]['pins'].append(pin)

                boards[row['id']] = {'title': row['title'], 'pins': [pin]}

            print(' * Boards from user {}, successfully obtained '.format(self.owner))
            return {'ok': True, 'boards': boards}

        except Exception as error:
            return {'ok': False, 'error': error}

    def create_board(self):
        try:
            id_generator = uuid4().hex
            query = self.boards_table.insert().values(
                id=id_generator,
                title=self.title,
                owner=self.owner
            )

            execute_query(self.engine, query)

            print(' * Board {} successfully created'.format(id_generator))
            return {'ok': True, 'msg': 'Success'}

        except Exception as error:
            return {'ok': False, 'error': error}

    def delete_board(self):
        try:
            query = self.boards_table.delete().where(
                self.boards_table.c.id == self.board_id
            )

            execute_query(self.engine, query)

            print('Board successfully deleted')
            return {'ok': True, 'msg': 'Success'}

        except Exception as error:
            return {'ok': False, 'error': error}

    def pin_to_board(self):
        try:
            get_board = self.boards_table\
                .join(self.pins_table, self.pins_table.c.id == self.pin_id, isouter=True)\
                .select().where(self.boards_table.c.id == self.board_id)

            board = execute_query(self.engine, get_board)

            for row in board:
                query = self.association_table.insert().values(
                    pin_id=row['id_1'],
                    board_id=row['id']
                )

                execute_query(self.engine, query)

            print(' * Pin added to board {}'.format(self.board_id))
            return {'ok': True, 'msg': 'Success'}

        except Exception as error:
            return {'ok': False, 'error': error}

    def delete_pin_in_board(self):
        try:
            query = self.association_table.delete().where(self.association_table.c.pin_id == self.pin_id)

            execute_query(self.engine, query)

            print(' * Pin successfully deleted')
            return {'ok': True, 'msg': 'Success'}

        except Exception as error:
            return {'ok': False, 'error': error}
