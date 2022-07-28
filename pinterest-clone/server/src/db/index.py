from sqlalchemy import create_engine, MetaData
from sqlalchemy_utils import database_exists, create_database
from sqlalchemy.orm import sessionmaker
from dotenv import dotenv_values
from uuid import uuid4
from urllib.request import urlopen
from urllib.parse import urlparse

from .tables import create_all_tables
from .seeders.imagesSeeder import ImageSeeder

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
                print(' * Database was successfully created')
            except Exception as error:
                print(' * Error when trying to create the database: {}'.format(error))

    def create_tables(self):
        try:
            create_all_tables(self.engine)
        except Exception as error:
            print(' * Error when trying to create the tables: {}'.format(error))

    def session_connection(self):
        try:
            session_maker = sessionmaker(bind=self.engine)
            session = session_maker()
            print(' * Database connected')
            return session
        except Exception as error:
            print(' * Error when trying to connect to the db: {}'.format(error))

    def get_engine(self):
        return self.engine

    def seed_images_table(self):
        seeder = ImageSeeder(ENV['UNSPLASH_KEY'])

        self.metadata.reflect(bind=self.engine)
        pins_table = self.metadata.tables['pins']
        query = pins_table.select()
        connection = self.engine.connect()
        result = self.engine.execute(query)
        response = 0

        for row in result:
            response += 1

        while response < 100:
            random_image = seeder.get_random_images()
            id_generator = uuid4().hex
            url = random_image['urls']['full']
            open_url = urlopen(url)
            mimetype = open_url.info().get_content_type()
            parse_url = urlparse(url)
            name = parse_url.path
            title = random_image['user']['first_name']
            description = random_image['description']
            owner = '8ee42c60-cebe-45b4-9feb-0a001224a45c'

            query = pins_table.insert().values(
                id=id_generator,
                mimetype=mimetype,
                url=url,
                name=name,
                title=title,
                description=description,
                owner=owner
            )

            self.engine.execute(query)

            response += 1

        connection.close()
