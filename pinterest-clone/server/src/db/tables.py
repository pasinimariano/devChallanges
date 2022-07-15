from sqlalchemy import Table, Column, Text, String, Integer, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from uuid import uuid4

Base = declarative_base()

association_board_pin = Table(
    'association',
    Base.metadata,
    Column('pin_id', ForeignKey('pins.id')),
    Column('board_id', ForeignKey('boards.id'))
)


class Users(Base):
    __tablename__ = 'users'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    firstname = Column(String(50), nullable=False)
    lastname = Column(String(50), nullable=False)
    email = Column(String(128), nullable=False, unique=True)
    password = Column(String(128), nullable=False)
    profile_picture = Column(Text(), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    user_pins = relationship('Pins', backref='owner')
    user_likes = relationship('Likes', backref='owner')
    user_comments = relationship('Comments', backref='owner')
    user_boards = relationship('Boards', backref='owner')


class Pins(Base):
    __tablename__ = 'pins'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    mimetype = Column(String(150), nullable=False)
    url = Column(Text(), nullable=False)
    name = Column(Text(), nullable=False)
    title = Column(String(150), nullable=False)
    description = Column(Text(), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    owner = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=False)
    comments = relationship('Comments', backref='pin')
    likes = relationship('Likes', backref='pin')


class Likes(Base):
    __tablename__ = 'likes'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    owner = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=False)
    pin = Column(UUID(as_uuid=True), ForeignKey('pins.id'), nullable=False)


class Comments(Base):
    __tablename__ = 'comments'
    id = Column(UUID(as_uuid=True), primary_key=True, nullable=False, default=uuid4)
    post = Column(Text(), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    pin = Column(UUID(as_uuid=True), ForeignKey('pins.id'), nullable=False)
    owner = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=False)


class Boards(Base):
    __tablename__ = 'boards'
    id = Column(UUID(as_uuid=True), primary_key=True, nullable=False, default=uuid4)
    title = Column(String(128))
    owner = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=False)
    pins = relationship('Pins', secondary=association_board_pin)


def create_all_tables(engine):
    try:
        Base.metadata.create_all(engine)
    except Exception as error:
        print(' * Error when trying to create the tables: {}'.format(error))
