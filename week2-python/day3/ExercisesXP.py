# Ex 1: Convert the two following lists, into dictionaries.

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dict={}

result=zip(keys, values)
dict.update(result)
print(dict)

# Ex 2:

# How much does each family member have to pay ?
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8, 'Nath': 2, 'Samuel' : 15}
ticket=0

for key, value in family.items():
        if value<3:
                        ticket+=0
                        print(f'It will be free for {key}.')
        elif 3<value<12:
                        ticket+=10
                        print(f'It will cost 10$ for {key}.')
        else:
                        ticket+=15
                        print(f'It will cost 15$ for {key}.')

# Print out the family’s total cost for the movies.
print(f'The family final cost will be {ticket}.')


# Ex 3:
name= "Zara"
creation_date= 1975 
creator_name= "Amancio Ortega Gaona"
type_of_clothes= ["men", "women","children","home"]
international_competitors= ["Gap", "H&M", "Benetton"]
number_stores: 7000 
major_color: {"France" : "blue", "Spain" : "red","US" : ["pink","green"]}

brand={}
brand['brand_name'] = 'Zara'
brand['creation_date'] = 1975
brand['creator_name'] = 'Amancio Ortega Gaona'
brand['number_stores'] = 7000
brand['major_color']={"France" : "blue", "Spain" : "red","US" : ["pink","green"]}
print(brand)

brand['number_stores'] = 2
print(brand)

print(f'{brand["brand_name"]} clients are men, women and children')

brand['country_creation']='Spain'
print(brand)

brand["international_competitors"]=["Gap", "H&M", "Benetton"]
print(brand)


if "international_competitors" in brand:
    brand["international_competitors" ].append('Desigual')
    print(brand)

else: print('The  key does not exist')


del brand['creation_date']
print(brand)

print(brand["international_competitors"][-1])


# for value in brand:
#     print(f'{US}' is {value})

for key, value in brand.items():
    print(key)

for key, value in brand.items():
    print(value)

more_on_zara={
'creation_date': 1975, 
'number_stores': 10000
}

brand.update(more_on_zara)
print(brand)

for key, value in brand.items():
    print(number_stores)
