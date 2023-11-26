#1 Print the following output in one line of code:

print(f"Hello world\n"*4)

#2 Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

print((99**3)*8)

#3 Predict the output of the following code snippets:

>>> 5 < 3
False

3==3
Nothing

>>> 3 == "3"
False

>>> "3" > 3
False

>>> "Hello" == "hello"
True

#4 Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand="Asus"
print(f"I have an {computer_brand} computer.")

# 5# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code

name="Samuel"
age=31
shoes_size=41
info=(f"my name is {name}, I am {age} years old, my shoes size is {shoes_size}.")
print(info)


# 6# 
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

a=int(input("Enter a number: "))
b=int(input("Enter a number: "))
if a >b:
    print("Hello World")


# 7# Write code that asks the user for a number and determines whether this number is odd or even.

a=int(input("Enter enter a number: "))

if a%2==0:
    print("The number is odd")
else:
    print("The number is even")



# # 8 Write code that asks the user for a number and determines whether this number is odd or even.
myname="Samuel"
name=(input("Enter your name: "))
if name==myname:
    print("Oh my god, we have the same name!")
else:
    print("Oh it's bad, we do not have the same name!")

# 9# Write code that will ask the user for their height in inches.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

height=int(input("Enter your height in inches: "))
if (height*2.54)>57:
    print("You are tall enough to ride")
else:
    print("You do have not the proper height to ride")

