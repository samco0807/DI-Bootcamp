import psycopg2
import requests
import os
import tweepy
from dotenv import load_dotenv

#Load variables from the .env file into connect
load_dotenv()

# 1 #establish a connection
conn = psycopg2.connect(
    dbname=os.getenv('Antisemitism'),
    user=os.getenv('htxryfck'),
    password=os.getenv('H6ckXYxYvwQGrAWv4mu6tl0gPVJuvjOq'),
    host=os.getenv('berry.db.elephantsql.com'),
    port=os.getenv('5432')
)

# Create a cursor object to interact with the database
cur = conn.cursor()


# Execute SQL Queries:
cur.execute('''CREATE TABLE tweets (
	tweet_id serial PRIMARY KEY,
	username VARCHAR ( 50 )  NOT NULL,
    user_location VARCHAR (50) NOT NULL,
	tweet_content VARCHAR (1000) NOT NULL,
	tweet_date DATE NOT NULL
	
);

CREATE TABLE sentiment (
	sentiment_id serial PRIMARY KEY,
	sentiment VARCHAR ( 50 )  NOT NULL,
    confidence FLOAT
    
);
''')

conn.commit()
cur.execute('''


INSERT INTO 
    tweet (username, tweet_content, tweet_date)
VALUES
    (, ,),
    (,,),
    (,,),
    (,,);
	
	
SELECT tweet_content=''''')

# Execute a simple SQL query
cur.execute("SELECT * FROM tweet;")
conn.commit()

# Fetch all results
result = cur.fetchall()
print(result)

# Execute a Query with Parameters:

# Use parameterized query to avoid SQL injection
query = "SELECT * FROM your_table WHERE column_name = %s;"
parameter = ("some_value",)
cur.execute(query, parameter)


# Commit and Close:

# Commit changes (if any)
conn.commit()

# Close the cursor and connection
cur.close()
conn.close()

# Error Handling:

try:
    # your code here
except psycopg2.Error as e:
    print("Error:", e)
    # Handle the error as needed
finally:
    # Ensure to close the connection in case of an error
    if conn is not None:
        conn.close()