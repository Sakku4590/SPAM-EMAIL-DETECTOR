from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow all origins

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    text = data.get("text")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    # Example: use your ML model here
    # prediction = model.predict([text])[0]
    prediction = "spam" if "discount" in text.lower() else "ham"

    return jsonify({"prediction": prediction})

if __name__ == '__main__':
    app.run(debug=True)
