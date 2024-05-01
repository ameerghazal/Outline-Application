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

@app.route('/pullPostsFollowing')
def get_posts_with_tasks():
    curr_user_id = request.args.get('userID')
    # Establish a database connection
    conn = psycopg2.connect(database="postgres",
                            host="localhost",
                            user="postgres",
                            password="Noornoor21",
                            port="5432")

    # Create a cursor with dictionary cursor factory
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    # Query the user ids that the current user is following
    cursor.execute("SELECT followed_user_id FROM follows WHERE following_user_id = %s", (curr_user_id,))
    users = cursor.fetchall()

    posts = {}
    for user in users:
        # Initialize a list to store posts for the current user
        user_posts = []
        
        # Fetch posts for the current user
        cursor.execute("SELECT * FROM posts WHERE user_id = %s", (user["followed_user_id"],))
        user_posts_data = cursor.fetchall()
        
        # Append each post to the list of user_posts
        for post_data in user_posts_data:
            user_posts.append(post_data)
        
        # Store the list of user_posts in the dictionary with user ID as key
        posts[user["followed_user_id"]] = user_posts

    # Initialize a dictionary to store posts and their tasks
    posts_with_tasks = {}
    # Iterate over the fetched posts
    for user_id, user_posts in posts.items():
        for post in user_posts:
            # Fetch tasks associated with the current post
            cursor.execute("SELECT body, is_checked FROM post_tasks WHERE post_id = %s", (post["id"],))
            post_tasks = cursor.fetchall()

            # Extract the "body" property values into an array of strings
            post_bodies = [{"body": task["body"], "is_checked": task["is_checked"]} for task in post_tasks]

            # Fetch if liked associated with the current post
            print(user_id)
            cursor.execute("SELECT COUNT(id) FROM post_likes WHERE (post_id = %s) AND (user_id = %s)", (post["id"],curr_user_id))
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
    print(posts_with_tasks)
    # Return JSON response using jsonify
    return jsonify(posts_with_tasks)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port = 80, debug=True)
