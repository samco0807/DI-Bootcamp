
SELECT COUNT(*) FROM actors;

SELECT * 
FROM actors 
WHERE number_oscars >= 3 

SELECT first_name, last_name 
FROM actors 
WHERE first_name='Jessica' AND last_name='Chastain';

SELECT * 
FROM actors
LIMIT 5
ORDER BY first_name ASC
