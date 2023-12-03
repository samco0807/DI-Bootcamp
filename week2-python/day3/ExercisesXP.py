# Ex 1: Convert the two following lists, into dictionaries.

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dict={}

result=zip(keys, values)
dict.update(result)
print(dict)

