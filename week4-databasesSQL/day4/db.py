import psycopg2
import os
from dotenv import load_dotenv

#Load variables from the .env file into connect
load_dotenv()

# 1 #establish a connection
connexion = psycopg2.connect(
    dbname=os.getenv('db_name'),
    user=os.getenv('db_user'),
    password=os.getenv('db_password'),
    host=os.getenv('db_host'),
    port=os.getenv('db_port')
)

# Create a cursur object to execute SQL queries
cursor = connexion.cursor()

# CRUD  - Create (insert) Read (select) Update (update) Delete (delete)

# Insert query
insert_query = 'INSERT INTO products (name, price) VALUES (%s, %s)'
# data_to_insert = ('iKey', 750)
# # cur.execute(insert_query, data_to_insert)
cursor.execute('INSERT INTO products (name, price) VALUES (%s, %s)', ('iKey', 750))



# Update query
# update_query = 'UPDATE products SET name=%s, price=%s WHERE id= %s'
# new_value = ('iCar2024', 9999, 8)
# cursor.execute(update_query, new_value)

# Delete query
cursor.execute('DELETE FROM products WHERE id=%s', ('8'))

# Commit the transaction
connexion.rollback()



# Execute a SELECT query
cursor.execute('SELECT * FROM products')
rows = cursor.fetchall()

for row in rows:
    print(row)


# Close the cursur and the connection
cursor.close()
connexion.close()

# # close the cursur and the connection
cursor.close()
connexion.close()

