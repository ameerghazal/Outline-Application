from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor
import datetime
import json
import uuid

app = Flask(__name__)
CORS(app)

# Define a custom function to serialize datetime objects 
def serialize_datetime(obj): 
    if isinstance(obj, datetime.datetime): 
        return obj.isoformat() 
    raise TypeError("Type not serializable") 

@app.route('/pushPosts', methods=['POST'])
def push_posts():
    if request.method == 'POST':
        data = request.json
        print(data)
        # Extract user data from the JSON object
        user_id = data.get('user_id')
        post_tasks = data.get('post_tasks')
        
        print(user_id)
        # Establish a database connection
        conn = psycopg2.connect(database="postgres",
                                host="localhost",
                                user="postgres",
                                password="Noornoor21",
                                port="5432")
        # Create a cursor
        cursor = conn.cursor()

        # # Write the SQL query to insert post data into the database (88a0d522-d2db-41ae-ace1-cfeac4a1a195)
        query1 = """
        INSERT INTO posts (user_id, post_status_id, created_at) 
        VALUES (%s,%s,CURRENT_TIMESTAMP)
        RETURNING id
        """
        cursor.execute(query1, (user_id,'88a0d522-d2db-41ae-ace1-cfeac4a1a195'))

        # Get the ID of the newly created post
        new_post_id = cursor.fetchone()[0]

        # # Write the SQL query to insert post tasks into the database
        for task in post_tasks:
            cursor.execute("INSERT INTO post_tasks (body, is_checked, post_id) VALUES (%s,false,%s)", (task,new_post_id))


        # # Commit the transaction
        conn.commit()

        # Close cursor and connection
        cursor.close()
        conn.close()

        # Return JSON response using jsonify
        return jsonify({'message': 'User added successfully'}), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", port = 85, debug=True)
