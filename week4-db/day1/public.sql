-- Active: 1702210359229@@127.0.0.1@5432@public@public

-- SELECT * FROM customers
-- WHERE customer_firstname != 'Scott'


-- SELECT * FROM customers
-- WHERE customer_lastname = 'Jones'

-- SELECT * FROM customers
-- WHERE customer_lastname = 'smith'

-- SELECT * FROM items
-- WHERE product_price<300

-- SELECT * FROM items
-- WHERE product_price>80

-- SELECT * FROM customers

-- SELECT * FROM items

-- INSERT INTO
--     items(product_name, product_price)
-- VALUES ('Small Desk', 100), ('Large Desk', 300), ('Fan', 80)

-- INSERT INTO
--     customers(
--         customer_firstname,
--         customer_lastname
--     )
-- VALUES ('Greg', 'Jones'), ('Sandra', 'Jones'), ('Scott', 'Scott'), ('Trevor', 'Green'), ('Melanie', 'Johson')

-- CREATE TABLE
--     items(
--         id serial primary key,
--         product_name varchar (255) UNIQUE NULL,
--         product_price INTEGER NOT NULL
--     )

-- CREATE TABLE
--     customers(
--         id serial primary key,
--         customer_firstname VARCHAR (300),
--         customer_lastname VARCHAR (300)
--     )