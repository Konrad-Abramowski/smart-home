from flask import Flask, jsonify, request
from yeelight import discover_bulbs
from yeelight import Bulb

app = Flask(__name__)


@app.route('/discover_bulbs', methods=['GET'])
def discover_all_bulbs():
    return jsonify(discover_bulbs()), 200


@app.route('/<ip>/toggle', methods=['GET'])
def toggle(ip):
    bulb = Bulb(ip)
    bulb.toggle()

    return "", 200


@app.route('/<ip>/rgb', methods=['GET'])
def set_rgb_value(ip):
    bulb = Bulb(ip)

    red = int(request.args.get('red'))
    green = int(request.args.get('green'))
    blue = int(request.args.get('blue'))

    bulb.set_rgb(red, green, blue)
    return "", 200


if __name__ == '__main__':
    app.run()
