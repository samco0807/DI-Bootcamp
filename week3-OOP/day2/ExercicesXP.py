# Ex 1:
 #JULIANA: The exercise gave you the inicial Classes and you needed to just create objects 
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Create another cat breed named Siamese which inherits from the Cat class.

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.


#JULIANA: remeber: when you create an object of the class you just pass the atributes. 
# #No need for self when doing this because the "self" IS the object that is being create.
# all_cats=[Bengal("Bengal", self.age), Chartreux("Chartreux", 12), Siamese("Siamese", 15)]
# print(all_cats)

#JULIANA CORRECTION:
all_cats=[Bengal("Bengal", 5), Chartreux("Chartreux", 12), Siamese("Siamese", 15)]
print(all_cats)

# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.

# sara_pets=Cat("Bengal", age, 'Chartreux','Siamese',all_cats)
#JULIANA CORRECTION:
sara_pets = Pets(all_cats)
print(all_cats)

# Ex 2:

class Dog: #JULIANA: use capital letters when creating classes
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
    
#JULIANA CORRECTION: INDENTATION IS KEY. here you had all the functions outside of the class because there was no indentation
    def bark(self,bark):
        return print(f'{self.name} is barking') #JULIANA: now that you understand change the next methods ;) 
    # print(f'{self.name} is barking') JULIANA: You can print inside the class if is not inside a method. 

    # def run_speed(self,run_speed):
    #     self.run_speed=run_speed
    #     return self.run_speed
    # # print(f'{(self.weight/self.age)*10}')

    # def fight(self,other_dog):
    #     self.other_dog=other_dog
    #     return self.fight
    # # print(f'{self.name} is barking')


dog1=Dog('Woopi', 10, 3)
dog2=Dog('Ella', 7, 5)
dog3=Dog('Wody', 6, 2)

#JULIANA: Now that we created the objects in lines 88, 89, 90, we can call the method in the object (the object - dog1- is the self then)
dog1.bark()

