import sys
from flask import Flask
from flask_cors import CORS

from routes.index import set_routes

sys.path.append('../services')
sys.path.append('../commons')

app = Flask(__name__)
CORS(app)

app.config.from_object('config.DevConfig')

set_routes(app)

if __name__ == '__main__':
    debug = app.config['DEBUG']
    port = app.config['PORT']
    app.run(debug=debug, port=port)
