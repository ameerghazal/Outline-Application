from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) 


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

    user_id = request.args.get('userID')

    # Query the user ids that the current user is following
    cursor.execute("SELECT id, username, bio, picture FROM users WHERE id = %s", (user_id,))
    users = cursor.fetchone()
    
    # Query the user ids that the current user is following
    cursor.execute("SELECT first_name, last_name FROM users WHERE id = %s", (user_id,))
    name = cursor.fetchone()
    users["full_name"] = name["first_name"].capitalize() + " " + name["last_name"].capitalize()

    


    # Query the amount of posts
    cursor.execute("SELECT COUNT(id) FROM posts WHERE user_id = %s", (user_id,))
    outline_count = cursor.fetchone()
    users["outline_count"] = outline_count["count"]

    # Query the amount that the user is following
    cursor.execute("SELECT COUNT(following_user_id) FROM follows WHERE following_user_id = %s", (user_id,))
    following_count = cursor.fetchone()
    users["following_count"] = following_count["count"]

    # Query the amount of followers
    cursor.execute("SELECT COUNT(followed_user_id) FROM follows WHERE followed_user_id = %s", (user_id,))
    follower_count = cursor.fetchone()
    users["follower_count"] = follower_count["count"]
    
    # Close cursor and connection
    cursor.close()
    conn.close()

    # Return JSON response
    return jsonify(users)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port = 81, debug=True)
