import cloudinary.uploader
from uuid import uuid4
from datetime import datetime
from werkzeug.utils import secure_filename
from sqlalchemy.orm import sessionmaker

from ..commons.get_table import get_table
from ..commons.execute_query import execute_query, format_image


class ImageService:
    def __init__(self, server):
        self.server = server
        self.engine = server.config['DB_ENGINE']
        self.session = sessionmaker(self.engine)
        self.images_table = get_table(self.engine, 'images')

    def upload_image(self, file, title, owner):
        try:
            uuid = uuid4().hex
            mimetype = file.mimetype
            url = cloudinary.uploader.upload(file)
            filename = secure_filename(file.filename)
            datetime_now = datetime.now()

            query = self.images_table.insert().values(
                id=uuid,
                mimetype=mimetype,
                url=url["secure_url"],
                name=filename,
                title=title,
                posted_at=datetime_now,
                owner=owner.id
            )

            result = execute_query(self.engine, query)

            print(' * Image created at {}'.format(result))
            print(' * Image {} created successfully'.format(filename))
            return {'ok': True}

        except Exception as error:
            print(' * Error when trying to create image: {}'.format(error))
            return {'ok': False, 'error': error}

    def get_images(self, _all=None, _id=None):
        try:
            if _all is True:
                query = self.images_table.select()

                result = execute_query(self.engine, query)
                response = []

                for row in result:
                    image = {'id': row['id'], 'url': row['url'], 'title': row['title'], 'likes': row['likes']}
                    response.append(image)

                return {'ok': True, 'images': response}

            elif _id is not None:
                query = self.images_table.select().where(self.images_table.c.id == _id)

                result = execute_query(self.engine, query)

                for row in result:
                    return {'ok': True, 'images': row}

            else:
                return {'ok': False, 'error': 'Id or All parameter needed'}

        except Exception as error:
            print(' * Error when trying to get images: {}'.format(error))
            return {'ok': False, 'error': error}

