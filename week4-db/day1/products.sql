SELECT * FROM myproducts

-- DELETE FROM myproducts WHERE id = 1

-- UPDATE myproducts SET name = 'iPhone156', description ='The new apple'
-- WHERE id=2

-- SELECT * FROM myproducts

-- INSERT INTO myproducts(description, name, price)
-- VALUES ('Oppo','Oppo Reno XS', 650),
-- ('Honor','Honor Deluxe Edition', 550)

-- SELECT * FROM myproducts WHERE name like 'a%'

-- INSERT INTO myproducts(description, name, price)
-- VALUES ('Xiaomi','Mi Note 10', 350),
-- ('OnePlus','OnePlus Nord', 500)

-- SELECT * FROM myproducts WHERE price between 500 and 1000 ORDER BY name desc

-- SELECT name FROM myproducts

-- SELECT * FROM myproducts

-- INSERT INTO myproducts(description, name, price)
-- VALUES ('Apple','iPhone15', 800),
-- ('Samsung','Samsung Galaxy S23', 1000)

-- Name-products
-- 3 cols:
-- id- serial pkey
-- name varchar 255 not null
-- price integer not null
-- desc vachar 1000

-- CREATE TABLE myproducts(
-- id serial PRIMARY KEY,
-- name varchar (255) NOT NULL,
-- price integer NOT  NULL, 
-- description varchar (1000)
-- )

-- CREATE TABLE accounts(
-- 	user_id serial PRIMARY KEY,
-- 	user_name varchar (50) UNIQUE NOT NULL,
-- 	password varchar (50) NOT NULL,
-- 	email varchar (255) NOT NULL,
-- 	create_on timestamp NOT NULL default now(),
-- 	last_logi timestamp
-- )

-- CREATE TABLE myusertable(
-- id  serial primary key,
-- 	email varchar (255) UNIQUE NULL,
-- 	password varchar (1000),
-- 	created_date timestamp default now ()
-- )