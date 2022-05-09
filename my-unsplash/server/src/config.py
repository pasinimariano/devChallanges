from os import environ
from dotenv import dotenv_values

from db.index import DbConnection

ENV = dotenv_values()


class Config:
    SESSION_COOKIE_NAME = environ.get('SESSION_COOKIE_NAME')
    STATIC_FOLTER = 'static'
    TEMPLATES_FOLTER = 'templates'
    DB_CONNECTION = DbConnection()
    DB_CONNECTION.create_db()
    DB_CONNECTION.create_tables()
    DB_CONNECTION.session_connection()
    DB_ENGINE = DB_CONNECTION.get_engine()
    SECRET_KEY = ENV['SECRET_KEY']


class ProdConfig(Config):
    ENV = 'production'
    DEBUG = False
    TESTING = False


class DevConfig(Config):
    ENV = 'development'
    DEBUG = True
    TESTING = True
    PORT = 3001

