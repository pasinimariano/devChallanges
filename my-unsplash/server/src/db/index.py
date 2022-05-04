import uuid
import sqlalchemy
from datetime import datetime
from sqlalchemy import create_engine, MetaData
from sqlalchemy import Table, Column, String, DateTime
from sqlalchemy_utils import database_exists, create_database, UUIDType

from dotenv import dotenv_values

ENV = dotenv_values()
DB_DIALECT = ENV['DB_DIALECT']
DB_DRIVER = ENV['DB_DRIVER']
DB_USER = ENV['DB_USER']
DB_PASSWORD = ENV['DB_PASSWORD']
DB_HOST = ENV['DB_HOST']
DB_PORT = ENV['DB_PORT']
DB_NAME = ENV['DB_NAME']


class DbConnection:
    def __init__(self):
        self.db_url = '{}+{}://{}:{}@{}:{}/{}'.format(
            DB_DIALECT,
            DB_DRIVER,
            DB_USER,
            DB_PASSWORD,
            DB_HOST,
            DB_PORT,
            DB_NAME
        )
        self.engine = create_engine(self.db_url)
        self.metadata = MetaData(self.engine)

    def create_db(self):
        if not database_exists(self.engine.url):
            try:
                create_database(self.engine.url)
                print('Database was successfully created')
            except Exception as error:
                print('Error when trying to create the database: {}'.format(error))

    def create_tables(self):
        if not sqlalchemy.inspect(self.engine).has_table('Users'):
            try:
                Table('Users', self.metadata,
                      Column('id', UUIDType(binary=False), primary_key=True, default=uuid.uuid4()),
                      Column('firstname', String(50), nullable=False),
                      Column('lastname', String(50), nullable=False),
                      Column('email', String(50), nullable=False, unique=True),
                      Column('created_at', DateTime(), default=datetime.now())
                      )

                self.metadata.create_all()
                print('Tables was successfully created')

            except Exception as error:
                print('Error when trying to create the tables: {}'.format(error))
