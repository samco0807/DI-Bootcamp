# In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.

# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

class MenuManager:

    @classmethod
    def get_by_name(cls, Menu_Items):
        if name = item_name(Menu_Items):
            print(f'{name}')
        else:
            return none
    
    cur.execute()
    
    @classmethod
    def all_items ():
    query = '''SELECT * FROM menu_items'''
    return 
    

    cur.execute(all_items)
    cur.fetchall()

    except Exception as error:
    print (error)
finally:
    if the cur is not None:
    cur.close()
    if conn is not None:
    conn.close()