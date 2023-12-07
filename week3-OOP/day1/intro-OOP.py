
# def __init__(self, name, color):
#     print('an object created')
#     self

# def bark (self):
#     print(f'{self.name} barks! WAF')

# def walk (self, distance.int):
#     print('f{self.name} walks {distance} km')

class player:
    # attribut = caracteriser le concept de joueur
    def __init__(self, pseudo, health, attack):
        self.pseudo=pseudo
        self.health=health
        self.attack=attack
        print('Welcome player', pseudo, '/ Life', health, '/ Attack', attack)

    def get_pseudo(self):
        return self.pseudo
    
    def get_health(self):
        return self.health
    
    def get_attack_value(self):
        return self.attack

    def damage(self, damage):
        self.health-=damage
    print('Aie .. You suffer', damage, 'damages')

    def attack_player(self, target_player):
        target_player.damage(self.attack)

player1=player('Samuel', 30, 3) #nouvelle instance
player2=player('Dan&', 20, 5) #nouvelle instance

player1.damage(4)
print('You have now', player1.get_health(), 'health')

player2=player() #nouvelle instance
print('Bienvenue au joueur', player2.pseudo)

player1.attack_player(player2)
print(player1.get_pseudo(), 'attack', player2.get_pseudo())

print('Welcome player', player1.get.pseudo(),'/Life', player1.get_health(), '/Attack', player1.get_attack_value())
print('Welcome player', player2.get.pseudo(),'/Life', player2.get_health(), '/Attack', player2.get_attack_value())