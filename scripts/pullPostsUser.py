from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor
import datetime
import json

app = Flask(__name__)
CORS(app)


@app.route('/pullPostsUser')
def get_posts():
    # Establish a database connection
    conn = psycopg2.connect(database="postgres",
                            host="localhost",
                            user="postgres",
                            password="Noornoor21",
                            port="5432")

    # Create a cursor with dictionary cursor factory
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    user_id = request.args.get('userID')
    
    # Query the posts for the current user
    cursor.execute("SELECT * FROM posts WHERE user_id = %s", (user_id,))
    posts = cursor.fetchall()

    # Initialize a dictionary to store posts and their tasks
    posts_with_tasks = {}

    # Iterate over the fetched posts
    for post in posts:
        # Fetch tasks associated with the current post
        cursor.execute("SELECT * FROM post_tasks WHERE post_id = %s", (post["id"],))
        post_tasks = cursor.fetchall()
        
        # Extract the "body" property values into an array of strings
        post_bodies = [{"task_id": task["id"], "body": task["body"], "is_checked": task["is_checked"]} for task in post_tasks]

        # Fetch if liked associated with the current post
        cursor.execute("SELECT COUNT(id) FROM post_likes WHERE (post_id = %s) AND (user_id = %s)", (post["id"],user_id))
        post_like = cursor.fetchone()
        is_liked = False
        if (post_like["count"] > 0):
            is_liked = True
        
        # Store the array of body values in the current post dictionary
        post["post_tasks_bodies"] = post_bodies

        # Store if its liked
        post["is_liked"] = is_liked
        
        # Add the post to the dictionary using its ID as the key
        posts_with_tasks[post["id"]] = post
    
    # Close cursor and connection
    cursor.close()
    conn.close()
    # Return JSON response
    return jsonify(posts_with_tasks)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port = 86, debug=True)
