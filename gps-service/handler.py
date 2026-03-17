from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route("/")
def gps():
    try:
        r = requests.get("https://ipinfo.io/json")
        data = r.json()

        return jsonify({
            "city": data.get("city"),
            "region": data.get("region"),
            "country": data.get("country"),
            "location": data.get("loc")
        })
    except:
        return jsonify({"error": "Could not fetch location"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)