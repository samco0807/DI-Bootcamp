# Ex 1:
# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print()

# Ex 2:
# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"
# }

# keys_to_remove = ["name", "salary"]

# del sample_dict [{'name':'kelly', 'salary: 8000'}]; 

# for key in keys_to_remove:
#     if key in sample_dict:
#         del keys_to_remove

# Ex 3:
students={
    'Samuel':{
      'note': 12,
      'appreciation': 'attention'
   },
    'Kelly': {
      'note': 15,
      'appreciation': 'good'
  },
    'Juliana':{
      'note': 17,
      'appreciation': 'very good'
  }
    }

print(students['Samuel'],['Kelly'])

# Afficher la liste des étudiants et de leur appréciation
for student in students:
    print(students[student]['note'], students[student]['appreciation'])

# add a student:
students['Lior']['note']==20

# delete a student
del students['Samuel']

print(students.get('Samuel','Name'))

for student in students.values():
    print(student)

# Faire la moyenne des élèves
print(sum(students.values())/len(students))

# calculer la moyenne de chaque élève
for name, average in students.items():
    print(f'The average of {name} is {average}/20')


['Samuel','Michal','Juliana']
print(students)