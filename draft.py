# ex: not finished:
# my_string=input('Enter a sentence: ')
# if my_string is lowercase():
#     print(f'{my_string} is in lowercase')
# else:
#     print(f'{my_string} is not in lowercase')

# list=[1,2,3,4]
# list=[i*20 for i in list]
# print(list)

# toppings=[input('Select your toppings: ')]
# price=10

# for topping in toppings:
#         if input == 'quit':
#                 print('you chose no topping')
#                 break
#         else: 
#                 toppings.append(topping)
#                 price+=2.5
#                 if len(toppings)>=5:
#                         print(f' You chose those toppings{toppings}. The final cost is {price}')
#                 else:
#                         print('You choose to much toppings')


# toppings=[]

# while True:
#     topping=input("'Add a topping' or 'quit' :")
#     if topping == 'quit':
#         break
#     else:
#         print(f'You added this {topping}.')
#         toppings.append(topping)

# price=10+2.5*len(toppings)
# print(f'Your pizza with toppings {', '.join(toppings)} cost {price} dollars')

# total_cost=0
# number_ticket=0





# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# dict={}

# result=zip(keys, values)
# dict.update(result)
# print(dict)
       
# print(f'it will cost {ticket} for {family.keys}. {ticket}''$''\n')
    
# Ex 1:

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# # Create another cat breed named Siamese which inherits from the Cat class.

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'


# # Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.

# all_cats=[Bengal("Bengal", self.age), Chartreux("Chartreux", 12), Siamese("Siamese", 15)]
# print(all_cats)

# # Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.

# sara_pets=Cat("Bengal", age, 'Chartreux','Siamese',all_cats)

# class dog:
#     def __init__(self, name, age, weight) -> None:
#         self.name=name
#         self.age=age
#         self.weight=weight

#     def get_name(self):
#         return self.name
    
#     def get_age(self):
#         return self.age
    
#     def get_weight(self):
#         return self.weight
    

# def bark(self,bark):
#     self.bark=bark
#     return self.bark
# print(f'{self.name} is barking')

# def run_speed(self,run_speed):
#     self.run_speed=run_speed
#     return self.run_speed
# print(f'{(self.weight/self.age)*10}')

# def fight(self,other_dog):
#     self.other_dog=other_dog
#     return self.fight
# print(f'{self.name} is barking')


# dog1=dog('Woopi', 10, 3)
# dog2=dog('Ella', 7, 5)
# dog3=dog('Wody', 6, 2)

# file=open("students.txt","a+")
# file.write("Samuel\n")
# file.write("Carole\n")
# file.write("Julie\n")
# file.close()

# students_list=["Samuel","Segev","Juliana","Michal","Kelly","David"]

# with open("students.txt", "a+") as  file:
#     for student in students_list:
#         file.write(student +"\n")
#     file.close()

# import os
# import random

# if os.path.exists("meals.txt"):
#     with open("Meals.txt", "r+") as file:
#         meals_list=file.readlines()
#         meal_random_choice=random.choice(meals_list)
#         print("I propose you today the meal", meal_random_choice)
#         file.close()
# else:
#     print("Warning! The document doesn't exist!")

class Person():
    '''A person class'''
    name='John'
    age=40
    languages=[]

person1 = Person()
person2 = Person()

person1.languages.append('english')

print(Person.languages)
print(person2.languages)

person1.languages=['English']
person1.languages.append('Japanese')

print(Person.languages)
print(person2.languages)
print(person1.languages)

    

