from flask import Flask
from flask_cors import CORS
from auth import auth_bp
from users import users_bp
from test_routes import test_bp

app = Flask(__name__)
app.config['SECRET_KEY'] = '1234#123'
CORS(app)

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(users_bp, url_prefix='/api/users')
app.register_blueprint(test_bp, url_prefix='/api/tests')

if __name__ == '__main__':
    app.run(debug=True)
