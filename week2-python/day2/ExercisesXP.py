# 1.
# Create a set called my_fav_numbers with all your favorites numbers.

my_fav_numbers={"one","three","five"}

# Add two new numbers to the set.

my_fav_numbers.add("seven")
my_fav_numbers.add("nine")

print(my_fav_numbers)

# Remove the last number.

my_fav_numbers.remove("nine")

print(my_fav_numbers)

# Create a set called friend_fav_numbers with your friend’s favorites numbers.

friend_fav_numbers={'056345554','056765536'}

# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)

print (our_fav_numbers)

2.
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
No, Tuples are immutable lists, which means items can’t be changed.

3.
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(basket)
# Remove “Banana” from the list.

basket.pop(0)
print(basket)

# Remove “Blueberries” from the list.

basket.pop(2)
print(basket)

# Add “Kiwi” to the end of the list.

basket.append('Kiwi')
print(basket)

# Add “Apples” to the beginning of the list.

basket.insert(0,'Apples')
print(basket)

# Count how many apples are in the basket.

print(len(basket))

# Empty the basket.

basket.clear()
print(basket)

# 4. Didn't understand the questions.
# Recap – What is a float? What is the difference between an integer and a float?
A float is an integer with decimals.

# Can you think of another way to generate a sequence of floats?

# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).


5.
# Use a for loop to print all numbers from 1 to 20, inclusive.

num = int(1)
list=[]

for i in range(1,21):
    print(i)

# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
num = int(1)
i=''

for i in range(1,21):
    print(i)
    
if i..index(%2==0)
    print(i)

# Do not find the write answer

6.
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

name=input('Enter your name: ')
my_name='Samuel'

while name != my_name:
    print('This is not my name. Try again.')
    continue
if name == 'quit':
    print('Thanks for playing')
elif name == my_name:
    print('It is ok, we have the same name')
    break

7. 

# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.


fruits=input('Enter your favorite(s) fruit(s). Separate the fruits with a single space: ')

list = list(fruits)
print(list)

user_fruit=input('Tell me which fruit do you prefer: ')

for user_fruit in fruits:
    print ('You chose one of your favorite fruits! Enjoy!')
else ():
    print ('You chose a new fruit. I hope you enjoy')


8. 

9.
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

total_cost=0
number_ticket=0


while True:
        age=int(input('Enter the ages of each person or quit: '))
        if age==0:
                break
        else:
                if age < 3 :
                        number_ticket+=1
                        total_cost+=0  
                elif 3<age< 12:
                        number_ticket+=1
                        total_cost+=10
                else:
                        number_ticket+=1
                        total_cost+=15
                
print(f'You are {number_ticket} people and the total cost is {total_cost}.')


# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

names=['Liron','Sharon','Samuel','Liora','Sarah']
allowed=[]

for name in names:
        
        age=int(input('Enter your age: '))
        if 16<age<21:
                
                        print('You are allowed to see the movie')
                        allowed.append(name)
                        continue

        else:
                        print('You cannot see the movie')
                        names.remove(name)
                        continue                       

print(', '.join(allowed), 'are allowed to see the movie')