# ex 1: 
# def welcome():
#     print('Bienvenue sur la ma chaine YouTube')
#     result=5+6
#     print('Le resultat du calcul est', result)

# welcome()

# ex 2: 

# def next_year():
#     global year
#     print('End of the year', year)
#     year+=1 
#     print('Start of the year', year)
# year=2018

# next_year()

# Ex 3:
# def addition1():
#     return 5+4
    
# def addition2():
#     return 5+5


# def addition3():
#     return 5+9

# def addition(n):
#     return 5+n

# print('the result is', addition(5))
# print('the result is', addition(4))
# print('the result is', addition(9))

# Ex:4
# # Créer une fonction max() qui va renvoyer le résultat le plus haut
# def max(a,b):
#     if a>b:
#         return a
#     else:
#         return b

# first_value=int(input('Enter the value of a: '))
# second_value=int(input('Enter the value of b: '))
# print('The max value is', max(first_value, second_value))

def calculation (a, b):
    addition=a+b
    substration=a-b
    res=calculation(a,b)
    return res
    

calculation(4,4)
print(res)