import psycopg2
import os
from dotenv import load_dotenv

#Load variables from the .env file into connect
load_dotenv()

#establish a connection
conn = psycopg2.connect(
    dbname=os.getenv('Restaurant'),
    user=os.getenv('db_user'),
    password=os.getenv('db_password'),
    host=os.getenv('db_host'),
    port=os.getenv('db_port')
)

# Create a cursur object to execute SQL queries
cur = conn.cursor()

# CRUD  - Create (insert) Read (select) Update (update) Delete (delete)

# Insert query
# insert_query = 'INSERT INTO products (name, price) VALUES (%s, %s)'
# data_to_insert = ('iKey', 750)
# # cur.execute(insert_query, data_to_insert)
# cur.execute('INSERT INTO products (name, price) VALUES (%s, %s)', ('iKey', 750))
query = 'SELECT * FROM menu_items'

class MenuItems:
    def __init__(self, item_name, item_price): 
        self.item_name=name
        self.item_price=price

MenuItems.save()
MenuItems.delete()
MenuItems.update(name, price)


'''DELETE from menu_items
UPDATE Menu_Items SET item_name='', item_price='' '''

# Execute a SELECT query
cur.execute(query)
rows = cur.fetchall()


# Close the cursur and the connection

except Exception as error:
    print (error)
finally:
    if the cur is not None:
    cur.close()
    if conn is not None:
    conn.close()