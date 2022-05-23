def execute_query(engine, query):
    connection = engine.connect()
    result = engine.execute(query)

    connection.close()

    return result


def format_image(row):
    image = {
        "id": row.id,
        "render": row.render_data,
        "name": row.name,
        "title": row.title,
        "description": row.description,
        "likes": row.likes,
        "posted_at": row.posted_at,
        "owner": row.owner,
        "comments": None
    }

    return image
