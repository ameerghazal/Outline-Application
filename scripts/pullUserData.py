from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
CORS(app)


@app.route('/pullUserData')
def get_posts_with_tasks():
    print("here")
    # Establish a database connection
    conn = psycopg2.connect(database="postgres",
                            host="localhost",
                            user="postgres",
                            password="Noornoor21",
                            port="5432")

    # Create a cursor with dictionary cursor factory
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    user_id = request.args.get('userID')
    # Query the user ids that the current user is following
    cursor.execute("SELECT username, user_handle, bio, picture FROM users WHERE id = %s", (user_id,))
    users = cursor.fetchone()
    
    # Close cursor and connection
    cursor.close()
    conn.close()

    # Return JSON response
    return jsonify(users)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port = 81, debug=True)
