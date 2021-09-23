from flask import Flask, Response, jsonify, request
from yeelight import discover_bulbs
from yeelight import Bulb

app = Flask(__name__)

bulb_url = '192.168.1.41'
bulb = Bulb(bulb_url)


@app.route('/discover_bulbs', methods=['GET'])
def discover_all_bulbs():
    return Response(discover_bulbs(), status=200)


@app.route('/toggle', methods=['GET'])
def toggle():
    bulb.toggle()
    return Response(status=200)


@app.route('/rgb')
def set_rgb_value():
    bulb.set_rgb(255, 255, 255)


if __name__ == '__main__':
    app.run()
