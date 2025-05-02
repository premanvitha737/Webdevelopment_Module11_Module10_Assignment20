from flask import Blueprint, jsonify
from middleware import role_required

test_bp = Blueprint('test', __name__)

@test_bp.route('/admin-only-tests', methods=['GET'])
@role_required('admin')
def admin_tests():
    return jsonify({'tests': ['Manage Users', 'Add IELTS Questions']})

@test_bp.route('/test-taker-tests', methods=['GET'])
@role_required('test_taker')
def taker_tests():
    return jsonify({'tests': ['Speaking Test', 'Mock Test']})
