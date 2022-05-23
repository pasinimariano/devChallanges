from sqlalchemy import MetaData


def get_table(engine, name):
    metadata = MetaData()
    metadata.reflect(bind=engine)
    user_table = metadata.tables[name]

    return user_table
