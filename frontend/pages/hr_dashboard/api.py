from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

@app.route('/api/interns')
def get_interns():
    interns = [
        {"name": "Riya Mehta", "department": "Design", "status": "Active", "progress": "70%"},
        {"name": "Kunal Singh", "department": "Development", "status": "Onboarded", "progress": "50%"},
        {"name": "Fatima Noor", "department": "HR", "status": "Completed", "progress": "100%"},
        {"name": "Aman Jain", "department": "Tech", "status": "Active", "progress": "85%"}
    ]
    return jsonify(interns)

if __name__ == '__main__':
    app.run(debug=True)
