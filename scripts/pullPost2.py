from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/pullPost2')
def pull_post():
    # Establish a database connection
    conn = psycopg2.connect(database="postgres",
                            host="localhost",
                            user="postgres",
                            password="Noornoor21",
                            port="5432")

    # Create a cursor with dictionary cursor factory
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    post_id = request.args.get('postID')

    # Query the post with the given post_id
    cursor.execute("SELECT * FROM posts WHERE id = %s", (post_id,))
    post = cursor.fetchone()

    if post:
        # Fetch tasks associated with the current post
        cursor.execute("SELECT * FROM post_tasks WHERE post_id = %s", (post_id,))
        post_tasks = cursor.fetchall()
        
        # Extract the "body" property values into an array of strings
        post_bodies = [{"task_id": task["id"], "body": task["body"], "is_checked": task["is_checked"]} for task in post_tasks]

        # Fetch if liked associated with the current post
        user_id = request.args.get('userID')
        cursor.execute("SELECT COUNT(id) FROM post_likes WHERE (post_id = %s) AND (user_id = %s)", (post_id, user_id))
        post_like = cursor.fetchone()
        is_liked = False
        if post_like["count"] > 0:
            is_liked = True

        # Store the array of body values in the current post dictionary
        post["post_tasks_bodies"] = post_bodies

        # Store if it's liked
        post["is_liked"] = is_liked
        
        # Close cursor and connection
        cursor.close()
        conn.close()
        
        # Return JSON response
        return jsonify(post)
    else:
        return jsonify({"error": "Post not found"}), 404

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=500, debug=True)
