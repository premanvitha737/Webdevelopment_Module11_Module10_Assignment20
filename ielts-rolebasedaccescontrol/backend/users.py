from flask import Blueprint, jsonify
from middleware import role_required

users_bp = Blueprint('users', __name__)

@users_bp.route('/admin', methods=['GET'])
@role_required('admin')
def admin_panel():
    return jsonify({'message': 'Welcome Admin!'})

@users_bp.route('/test-taker', methods=['GET'])
@role_required('test_taker')
def test_taker_panel():
    return jsonify({'message': 'Welcome Test Taker!'})
