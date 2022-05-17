from os import environ
from dotenv import dotenv_values

from db.index import DbConnection

ENV = dotenv_values()


class Config:
    SECRET_KEY = ENV['SECRET_KEY']
    SESSION_COOKIE_NAME = environ.get('SESSION_COOKIE_NAME')

    STATIC_FOLTER = 'static'
    TEMPLATES_FOLTER = 'templates'
    IMAGES_ALLOWED_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif']

    DB_CONNECTION = DbConnection()
    DB_CONNECTION.create_db()
    DB_CONNECTION.create_tables()
    DB_CONNECTION.session_connection()
    DB_ENGINE = DB_CONNECTION.get_engine()


class ProdConfig(Config):
    ENV = 'production'
    DEBUG = False
    TESTING = False


class DevConfig(Config):
    ENV = 'development'
    DEBUG = True
    TESTING = True
    PORT = 3001

