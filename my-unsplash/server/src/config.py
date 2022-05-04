from os import environ
from db.index import DbConnection


class Config:
    SESSION_COOKIE_NAME = environ.get('SESSION_COOKIE_NAME')
    STATIC_FOLTER = 'static'
    TEMPLATES_FOLTER = 'templates'
    DB_CONNECTION = DbConnection()
    DB_CONNECTION.create_db()
    DB_CONNECTION.create_tables()


class ProdConfig(Config):
    ENV = 'production'
    DEBUG = False
    TESTING = False


class DevConfig(Config):
    ENV = 'development'
    DEBUG = True
    TESTING = True
    PORT = 3001

