from flask import jsonify, request
import psycopg2
from psycopg2.extras import RealDictCursor
import datetime
import json

# Define a custom function to serialize datetime objects 
def serialize_datetime(obj): 
    if isinstance(obj, datetime.datetime): 
        return obj.isoformat() 
    raise TypeError("Type not serializable") 


# Establish a database connection
conn = psycopg2.connect(database="postgres",
                            host="localhost",
                            user="postgres",
                            password="Noornoor21",
                            port="5432")

# Create a cursor with dictionary cursor factory
cursor = conn.cursor(cursor_factory=RealDictCursor)

user_id = "TY9wzrcYJFTwJutARS7RXg1AeLB3"
    
 # Query the posts for the current user
cursor.execute("SELECT * FROM posts WHERE user_id = %s", (user_id,))
posts = cursor.fetchall()

    # Initialize a dictionary to store posts and their tasks
posts_with_tasks = {}

    # Iterate over the fetched posts
for post in posts:
        # Fetch tasks associated with the current post
    cursor.execute("SELECT body, is_checked FROM post_tasks WHERE post_id = %s", (post["id"],))
    post_tasks = cursor.fetchall()
        
        # Extract the "body" property values into an array of strings
    post_bodies = [{"body": task["body"], "is_checked": task["is_checked"]} for task in post_tasks]
        
        # Store the array of body values in the current post dictionary
    post["post_tasks_bodies"] = post_bodies
        
        # Add the post to the dictionary using its ID as the key
    posts_with_tasks[post["id"]] = post

    # Convert the dictionary to JSON
json_data = json.dumps(posts_with_tasks, indent=4,default=serialize_datetime)
    
 # Close cursor and connection
cursor.close()
conn.close()
print(json_data)