"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from backend.models import db, User
from backend.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

USERS = {
    "ADMIN":"1234"
}

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username == None or password == None:
        return jsonify({"error": "Houston we've got a problem, it seems that you forgot to enter your email or password"}), 400
    
    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({"error": "Houston we've got a problem, the person doesn't exist"}), 400