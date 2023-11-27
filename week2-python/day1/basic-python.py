# 'hello world'.upper()
# 'goodbye moon'.replace('goodbye','hello')
# print(dir(42))

# my_age = 31
# my_age_in_years = 123879
# print(my_age+my_age_in_years)

# cars = 100 #this is a line creates a number variable type: integer
# space_in_a_car = 4.0 #this is a line creates a number variable type: float
# drivers = 30 #this is a line creates a number variable type: integer
# passengers = 90 #this is a line creates a number variable type: integer
# cars_not_driven = cars - drivers #this is a line creates a number variable type: string
# cars_driven = drivers #this is a line creates a number variable type: integer
# carpool_capacity = cars_driven * space_in_a_car #this is a line creates a number variable type: float
# average_passengers_per_car = passengers / cars_driven #this is a line creates a number variable type: float


# print("There are" {"cars"} "cars available.")
# print("There are only", drivers, "drivers available.")
# print("There will be", cars_not_driven, "empty cars today.")
# print("We can transport", carpool_capacity, "people today.")
# print("We have", passengers, "to carpool today.")
# print("We need to put about", average_passengers_per_car,"in each car.")

# name=input('Please state your name: ')
# print('Your name is {}'.format(name))

# birthday_day=8
# birthday_month=7
# birthday_year=1992

# number=input("When are you born: ")

# print(f"I was born the {birthday_day}.{birthday_month}.{birthday_year}")
# print("I was born the {}.{}.{}".format(birthday_month, birthday_day, birthday_year))
# print(f"{2*35}")


# number=int(input('Please give us a number to multiply by 3: '))

# age=input("How old are you?: ")
# print("You are {} years old".format(age))

# a = input("Enter a number: ")
# b = input ("Enter another number: ")
# if a >= b:
#     print("a is greater than b or equal")
# elif a < b:
#     print("a is lower than b")
# else:
#     print("a and b are equal")

# print("Finished")

number=int(input("Please enter a number between 0 and 100: "))
if number%3==0:
    print("Fizz")
elif number%5==0:
    print("Buzz")
else:
    print("FizzBuzz")

