# def num(1 100)
#     if  0 <number < 100 random.number:
#         print('You have the same number')
#     else:
#         print('you do not have the wrong number')

# name='apple'
# letter='l'
# index_letter=name.index(letter)
# print(index_letter)

# ex:
# name='xylophone'
# letter='y'
# if letter in name:
#     print(f'{letter} is in {name}')
# else:
#     print(f'({letter} is not in {name}')

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


# while True:
#         age=int(input('Enter the ages of each person or quit: '))
#         if age==0:
#                 break
#         else:
#                 if age < 3 :
#                         number_ticket+=1
#                         total_cost+=0
                        
#                 elif 3<age< 12:
#                         number_ticket+=1
#                         total_cost+=10
#                 else:
#                         number_ticket+=1
#                         total_cost+=15
                

# print(f'You are {number_ticket} people and the total cost is {total_cost}.')




# names=['Liron','Sharon','Samuel','Liora','Sarah']
# allowed=[]

# for name in names:
        
#         age=int(input('Enter your age: '))
#         if 16<age<21:
                
#                         print('You are allowed to see the movie')
#                         allowed.append(name)
#                         continue

#         else:
#                         print('You cannot see the movie')
#                         names.remove(name)
#                         continue                       

# print(', '.join(allowed), 'are allowed to see the movie')

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# dict={}

# result=zip(keys, values)
# dict.update(result)
# print(dict)


# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8, 'Nath': 2, 'Samuel' : 15}
# ticket=0
# for item in family.items():

#         if item<3:
                
#                 ticket=0
#                 value=family.values
#                 value<3
#                 print('it will cost 0$ for', value,'\n')

#         elif 3<item<12: 
#                 value=family.values
#                 3<value<12
#                 ticket+=10
#                 print('it will cost 10$ for', value,'.\n')

#         else: 
#                 ticket+=15
#                 print('it will cost 15$ for', family.,'.\n')

        
# print(f'it will cost {ticket} for {family.keys}. {ticket}''$''\n')


# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8, 'Nath': 2, 'Samuel' : 15}
# ticket=0

# for key, value in family.items():
#         if value<3:
#                         ticket+=0
#                         print(f'It will be free for {key}.')
#         elif 3<value<12:
#                         ticket+=10
#                         print(f'It will cost 10$ for {key}.')
#         else:
#                         ticket+=15
#                         print(f'It will cost 15$ for {key}.')

# print(f'The family final cost will be {ticket}.')



# family = {}
# ticket=0

# name=(input('Enter your name: '))
# age=int(input('Enter your age: '))
# family.update({name: age})

# for name, age in family.items():
       

#         if age<3:
#                         ticket+=0
#                         print(f'It will be free for {name}.')
#         elif 3<age<12:
#                         ticket+=10
#                         print(f'It will cost 10$ for {name}.')
#         else:
#                         ticket+=15
#                         print(f'It will cost 15$ for {name}.')

# print(f'The family final cost will be {ticket}.')

# name= "Zara"
# creation_date= 1975 
# creator_name= "Amancio Ortega Gaona"
# type_of_clothes= ["men", "women","children","home"]
# international_competitors= ["Gap", "H&M", "Benetton"]
# number_stores: 7000 
# major_color: {"France" : "blue", "Spain" : "red","US" : ["pink","green"]}

# brand={}
# brand['brand_name'] = 'Zara'
# brand['creation_date'] = 1975
# brand['creator_name'] = 'Amancio Ortega Gaona'
# brand['number_stores'] = 7000
# brand['major_color']={"France" : "blue", "Spain" : "red","US" : ["pink","green"]}
# print(brand)

# brand['number_stores'] = 2
# print(brand)

# print(f'{brand["brand_name"]} clients are men, women and children')

# brand['country_creation']='Spain'
# print(brand)

# brand["international_competitors"]=["Gap", "H&M", "Benetton"]
# print(brand)


# if "international_competitors" in brand:
#     brand["international_competitors" ].append('Desigual')
#     print(brand)

# else: print('The  key does not exist')


# del brand['creation_date']
# print(brand)

# print(brand["international_competitors"][-1])


# # for value in brand:
# #     print(f'{US}' is {value})

# for key, value in brand.items():
#     print(key)

# for key, value in brand.items():
#     print(value)

# more_on_zara={
# 'creation_date': 1975, 
# 'number_stores': 10000
# }

# brand.update(more_on_zara)
# print(brand)

# for key, value in brand.items():
#     print(number_stores)
    
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

class dog:
    def __init__(self, name, age, weight) -> None:
        self.name=name
        self.age=age
        self.weight=weight

    def get_name(self):
        return self.name
    
    def get_age(self):
        return self.age
    
    def get_weight(self):
        return self.weight
    

def bark(self,bark):
    self.bark=bark
    return self.bark
print(f'{self.name} is barking')

def run_speed(self,run_speed):
    self.run_speed=run_speed
    return self.run_speed
print(f'{(self.weight/self.age)*10}')

def fight(self,other_dog):
    self.other_dog=other_dog
    return self.fight
print(f'{self.name} is barking')


dog1=dog('Woopi', 10, 3)
dog2=dog('Ella', 7, 5)
dog3=dog('Wody', 6, 2)
