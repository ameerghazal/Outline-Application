from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor
import datetime

app = Flask(__name__)
CORS(app)

# Define a custom function to serialize datetime objects 
def serialize_datetime(obj): 
    if isinstance(obj, datetime.datetime): 
        return obj.isoformat() 
    raise TypeError("Type not serializable") 

@app.route('/updateCheckbox', methods=['POST'])
def update_checkbox():
    if request.method == 'POST':
        data = request.json
        # Extract user data from the JSON object
        
        # Establish a database connection
        conn = psycopg2.connect(database="postgres",
                                host="localhost",  # Change to the IP address where your PostgreSQL is hosted
                                user="postgres",
                                password="Noornoor21",
                                port="5432")
        # Create a cursor with dictionary cursor factory
        cursor = conn.cursor(cursor_factory=RealDictCursor)

        # Insert or update post tasks
        cursor.execute("""
        UPDATE post_tasks
        SET body = %s, is_checked = %s
        WHERE id = %s
        """, (data['body'], data['is_checked'], data['task_id']))


        # Commit the transaction
        conn.commit()

        # Close cursor and connection
        cursor.close()
        conn.close()

        # Return JSON response using jsonify
        return jsonify({'message': 'Post tasks updated successfully'}), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=88, debug=True)
