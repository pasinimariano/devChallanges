from sqlalchemy import Column, Text, String, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy_utils import UUIDType

Base = declarative_base()


class Users(Base):
    __tablename__ = 'users'
    id = Column(UUIDType(binary=False), primary_key=True, nullable=False)
    firstname = Column(String(50), nullable=False)
    lastname = Column(String(50), nullable=False)
    email = Column(String(128), nullable=False, unique=True)
    password = Column(String(128), nullable=False)
    created_at = Column(DateTime(), nullable=False)
    updated_at = Column(DateTime(), nullable=True)
    images = relationship('Images', backref='owner')


class Images(Base):
    __tablename__ = 'images'
    id = Column(UUIDType(binary=False), primary_key=True, nullable=False)
    image_file = Column(Text, nullable=False)
    date_posted = Column(DateTime())
    owner_id = Column(UUIDType(binary=False), ForeignKey('users.id'))


def create_all_tables(engine):
    try:
        Base.metadata.create_all(engine)
    except Exception as error:
        print(' * Error when trying to create the tables: {}'.format(error))
