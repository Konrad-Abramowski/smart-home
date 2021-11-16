from flask import Flask, jsonify, request
from yeelight import discover_bulbs
from yeelight import Bulb
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app = Flask(__name__)


@app.route('/discover_bulbs', methods=['GET'])
@cross_origin()
def discover_all_bulbs():
    return jsonify(discover_bulbs()), 200


@app.route('/<ip>/toggle', methods=['GET'])
@cross_origin()
def toggle(ip):
    bulb = Bulb(ip)
    bulb.toggle()

    return "", 200


@app.route('/<ip>/rgb', methods=['GET'])
@cross_origin()
def set_rgb_value(ip):
    bulb = Bulb(ip)

    red = int(request.args.get('red'))
    green = int(request.args.get('green'))
    blue = int(request.args.get('blue'))

    bulb.set_rgb(red, green, blue)
    return "", 200


@app.route('/<ip>', methods=['GET'])
@cross_origin()
def set_brightness(ip):
    bulb = Bulb(ip)

    brightness = request.args.get('brightness')
    name = request.args.get('name')

    if brightness is not None:
        bulb.set_brightness(int(brightness))

    if name is not None:
        bulb.set_name(name)

    return "", 200


if __name__ == '__main__':
    app.run("192.168.0.59")
