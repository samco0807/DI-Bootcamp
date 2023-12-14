def show_user_menu():
    
    user_choice=input("Select a letter V A D U or S: ")

    if user_choice="V":
    # Function view item in the menu
        def add_item_to_menu():
         ''' SELECT item_name FROM menu_items '''
    
        # Function add item in the menu
        elif user_choice="A":
        item=input('which item do you want to add? ')
        '''INSERT INTO menu_items SET 'item' '''
    

        # Function delete item from the menu
        elif user_choice="D":
        '''DELETE item_name FROM menu_items'''

        # Function update item in the menu
        elif user_choice="U":
    
        # Function show the menu
        elif user_choice="S":

        # Quit the menu
        else:
        break
