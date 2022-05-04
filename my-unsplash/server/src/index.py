from flask import Flask

from routes.index import set_routes

app = Flask(__name__)

app.config.from_object('config.DevConfig')

set_routes(app)

if __name__ == '__main__':
    debug = app.config['DEBUG']
    port = app.config['PORT']
    app.run(debug=debug, port=port)
