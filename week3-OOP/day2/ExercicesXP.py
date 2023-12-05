# Ex 1:

# Create another cat breed named Siamese which inherits from the Cat class.

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.

all_cats=[Bengal("Bengal", self.age), Chartreux("Chartreux", 12), Siamese("Siamese", 15)]
print(all_cats)

# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.

sara_pets=Cat("Bengal", age, 'Chartreux','Siamese',all_cats)

# Ex 2:

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