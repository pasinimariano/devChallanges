from sqlalchemy import Column, Text, String, Integer, DateTime, ForeignKey, LargeBinary
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
    comments = relationship('Comments', backref='comment_owner')


class Images(Base):
    __tablename__ = 'images'
    id = Column(UUIDType(binary=False), primary_key=True, nullable=False)
    mimetype = Column(String(150), nullable=False)
    url = Column(Text(), nullable=False)
    name = Column(Text(), nullable=False)
    title = Column(String(128), nullable=False)
    description = Column(Text(252), nullable=True)
    likes = Column(Integer(), nullable=True)
    posted_at = Column(DateTime())
    update_at = Column(DateTime())
    owner = Column(UUIDType(binary=False), ForeignKey('users.id'), nullable=False)
    comments = relationship('Comments', backref='image_comment')


class Comments(Base):
    __tablename__ = 'comments'
    id = Column(UUIDType(binary=False), primary_key=True, nullable=False)
    post = Column(Text(63206), nullable=False)
    posted_at = Column(DateTime())
    update_at = Column(DateTime())
    image_id = Column(UUIDType(binary=False), ForeignKey('images.id'))
    owner_id = Column(UUIDType(binary=False), ForeignKey('users.id'))


def create_all_tables(engine):
    try:
        Base.metadata.create_all(engine)
    except Exception as error:
        print(' * Error when trying to create the tables: {}'.format(error))
