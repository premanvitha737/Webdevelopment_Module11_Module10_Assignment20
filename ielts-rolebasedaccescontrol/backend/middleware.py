from flask import request, jsonify
import jwt
from functools import wraps

def role_required(required_role):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            token = request.headers.get('Authorization')
            if not token:
                return jsonify({'error': 'Token missing'}), 401
            try:
                data = jwt.decode(token, 'your_secret_key', algorithms=['HS256'])
                if data['role'] != required_role:
                    return jsonify({'error': 'Unauthorized role'}), 403
            except jwt.ExpiredSignatureError:
                return jsonify({'error': 'Token expired'}), 401
            except jwt.InvalidTokenError:
                return jsonify({'error': 'Invalid token'}), 401
            return f(*args, **kwargs)
        return wrapper
    return decorator
