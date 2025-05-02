from flask import Blueprint, request, jsonify
import jwt
import datetime

auth_bp = Blueprint('auth', __name__)

# Dummy users
users = {
    'admin@example.com': {'password': 'admin123', 'role': 'admin'},
    'test@example.com': {'password': 'test123', 'role': 'test_taker'}
}

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = users.get(data['email'])
    if user and user['password'] == data['password']:
        token = jwt.encode({
            'email': data['email'],
            'role': user['role'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, 'your_secret_key', algorithm='HS256')
        return jsonify({'token': token})
    return jsonify({'error': 'Invalid credentials'}), 401
