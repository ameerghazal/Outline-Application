import datetime
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
    
@app.route('/pullPostsFollowing')
def get_posts_following():
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
            cursor.execute("SELECT * FROM post_tasks WHERE post_id = %s", (post["id"],))
            post_tasks = cursor.fetchall()

            # Extract the "body" property values into an array of strings
            post_bodies = [{"task_id": task["id"], "body": task["body"], "is_checked": task["is_checked"]} for task in post_tasks]

            # Fetch if liked associated with the current post
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

@app.route('/pullPostsUser')
def get_posts_user():
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

@app.route('/pullUserData')
def get_user_data():
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

@app.route('/pushUser', methods=['POST'])
def push_user():
    if request.method == 'POST':
        data = request.json
        print(data)
        # Extract user data from the JSON object
        id = data.get('id')
        email = data.get('email')
        username = data.get('username')
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        birthdate_str = data.get('birthdate')  # Assuming 'birthdate' is a string in 'MM/DD/YYYY' format
        
        # Parse the birthdate string into a datetime object
        birthdate = datetime.datetime.strptime(birthdate_str, '%m/%d/%Y')
        
        # Format the birthdate as a string in 'YYYY-MM-DD' format for PostgreSQL
        formatted_birthdate = birthdate.strftime('%Y-%m-%d')
        
        phone_number = data.get('phoneNumber')
        
        # Establish a database connection
        conn = psycopg2.connect(database="postgres",
                                host="localhost",
                                user="postgres",
                                password="Noornoor21",
                                port="5432")
        # Create a cursor
        cursor = conn.cursor()

        # Write the SQL query to insert user data into the database
        query = """
        INSERT INTO users (id,email, phone, username, first_name, last_name, birthdate, password, created_at) 
        VALUES (%s,%s, %s, %s, %s, %s, %s, %s, CURRENT_TIMESTAMP)
        """

        # Execute the query
        cursor.execute(query, (id,email, phone_number, username, first_name, last_name, formatted_birthdate, 'password_placeholder',))

        # Commit the transaction
        conn.commit()

        # Close cursor and connection
        cursor.close()
        conn.close()

        # Return a success message
        return jsonify({'message': 'User added successfully'}), 200
    
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
@app.route('/updatePostLike', methods=['POST'])
def update_post_like():
    if request.method == 'POST':
        data = request.json
        # Extract user data from the JSON object
        user_id = data.get('curr_user_id')
        post_id = data.get('id')
        is_liked = data.get('is_liked')
        print(is_liked)
        # Establish a database connection
        conn = psycopg2.connect(database="postgres",
                                host="localhost",  # Change to the IP address where your PostgreSQL is hosted
                                user="postgres",
                                password="Noornoor21",
                                port="5432")
        # Create a cursor
        cursor = conn.cursor()
        
        # Check if the user has already liked the post
        cursor.execute("""
            SELECT EXISTS (
                SELECT 1 FROM post_likes WHERE user_id = %s AND post_id = %s
            )
        """, (user_id, post_id))
        already_liked = cursor.fetchone()[0]
        print("Already Liked:", already_liked)
        if  not is_liked and not already_liked:
            # Insert like if not already liked
            print('Insert')
            cursor.execute("""
                INSERT INTO post_likes (user_id, post_id, created_at)
                VALUES ( %s, %s, CURRENT_TIMESTAMP)
            """, (user_id, post_id))
        else:
            print('Delete')
            # Remove like if already liked
            cursor.execute("""
                DELETE FROM post_likes WHERE user_id = %s AND post_id = %s
            """, (user_id, post_id))

        # Commit the transaction
        conn.commit()

        # Close cursor and connection
        cursor.close()
        conn.close()

        # Return JSON response using jsonify
        return jsonify({'message': 'Post like updated successfully'}), 200
    
@app.route('/updateUser', methods=['POST'])    
def update_user():
    if request.method == 'POST':
        data = request.json
        print(data)
        # Extract user data from the JSON object
        id = data.get('id')
        email = data.get('email')
        username = data.get('username')
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        birthdate_str = data.get('birthdate')  # Assuming 'birthdate' is a string in 'MM/DD/YYYY' format
        
        # Parse the birthdate string into a datetime object
        birthdate = datetime.datetime.strptime(birthdate_str, '%m/%d/%Y')
        
        # Format the birthdate as a string in 'YYYY-MM-DD' format for PostgreSQL
        formatted_birthdate = birthdate.strftime('%Y-%m-%d')
        
        phone_number = data.get('phoneNumber')
        
        # Establish a database connection
        conn = psycopg2.connect(database="postgres",
                                host="localhost",
                                user="postgres",
                                password="Noornoor21",
                                port="5432")
        # Create a cursor
        cursor = conn.cursor()

        # Write the SQL query to update user data in the database
        query = """
        UPDATE users 
        SET email = %s, phone = %s, username = %s, first_name = %s, last_name = %s, birthdate = %s 
        WHERE id = %s
        """

        # Execute the query
        cursor.execute(query, (email, phone_number, username, first_name, last_name, formatted_birthdate, id,))

        # Commit the transaction
        conn.commit()

        # Close cursor and connection
        cursor.close()
        conn.close()

        # Return a success message
        return jsonify({'message': 'User updated successfully'}), 200

@app.route('/pullUserSearch')    
def search_user():
    search = request.args.get('searchQuery')
        
    # Establish a database connection
    conn = psycopg2.connect(database="postgres",
                            host="localhost",
                            user="postgres",
                            password="Noornoor21",
                            port="5432")
    # Create a cursor
    cursor = conn.cursor()

    # Write the SQL query to update user data in the database
    query = """
    SELECT * FROM users 
    WHERE first_name || ' ' || last_name LIKE %s OR username LIKE %s
    """

    # Execute the query
    cursor.execute(query, ('%' + search + '%', '%' + search + '%'))
    data = cursor.fetchall()

    # Close cursor and connection
    cursor.close()
    conn.close()
    print(data)
    # Return the fetched data
    return jsonify(data), 200
    
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=500, debug=True)
