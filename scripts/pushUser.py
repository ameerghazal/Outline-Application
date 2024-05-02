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


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=83, debug=True)
