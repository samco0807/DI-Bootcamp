
# 1# 
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

sentence= input("Enter a sentence : ")
count=10

if len(sentence)<count:
    print("String is too short.")

elif len(sentence)>count:
    print("String is too long.")

else:
    print("Perfect string.")

# # 2# 
# Then, print the first and last characters of the given text.

print("The first character is :", sentence[0])
print("The last character is :", sentence[-1])

# 3# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:


# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld

string=input("Enter HelloWorld: ")
x=""

for character in string:
    x+=character
    print(x)
    
    
4#
import random
list= ["H", "l", "r", "o", "l", "e", "l", "w", "o", "d"]
random.shuffle(list)
print(list)