from flask import Flask, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)



@app.route('/pullUserData')
def get_posts_with_tasks():
    # Establish a database connection
    conn = psycopg2.connect(database="postgres",
                            host="localhost",
                            user="postgres",
                            password="Noornoor21",
                            port="5432")

    # Create a cursor with dictionary cursor factory
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    # Define the current user ID
    curr_user_id = 1

    # Query the user ids that the current user is following
    cursor.execute("SELECT username, bio, picture FROM users id = %s", (curr_user_id,))
    users = cursor.fetchall()
    
    # Close cursor and connection
    cursor.close()
    conn.close()

    # Return JSON response
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)
