from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor
import datetime

app = Flask(__name__)
CORS(app)


@app.route('/updatePostLike', methods=['POST'])
def update_post_like():
    if request.method == 'POST':
        data = request.json
        # Extract user data from the JSON object
        user_id = data.get('user_id')
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

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=90, debug=True)
