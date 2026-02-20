from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/items")
def items():
    return jsonify({"items": ["apple", "banana", "cherry"]})

@app.route("/code/sum", methods=["POST"])
def sum_code():
    data = request.get_json()
    a = data.get("a", 0)
    b = data.get("b", 0)
    return jsonify({
        "output": [
            {"color": "blue", "text": "a = "},
            {"color": "black", "text": str(a)},
            {"color": "black", "text": "\n"},
            {"color": "blue", "text": "b = "},
            {"color": "black", "text": str(b)},
            {"color": "black", "text": "\n"},
            {"color": "blue", "text": "sum a + b is : "},
            {"color": "blue", "text": str(a+b)}
        ]
    })

if __name__ == '__main__':
    app.run()