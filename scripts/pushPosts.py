from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor
import datetime
import json

app = Flask(__name__)
CORS(app)

# Define a custom function to serialize datetime objects 
def serialize_datetime(obj): 
    if isinstance(obj, datetime.datetime): 
        return obj.isoformat() 
    raise TypeError("Type not serializable") 

@app.route('/pushPosts')
def push_posts():
    # Establish a database connection
    conn = psycopg2.connect(database="postgres",
                            host="localhost",
                            user="postgres",
                            password="Noornoor21",
                            port="5432")

    # Create a cursor with dictionary cursor factory
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    # Close cursor and connection
    cursor.close()
    conn.close()

    # Return JSON response using jsonify
    # return jsonify(posts_with_tasks)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port = 82, debug=True)
