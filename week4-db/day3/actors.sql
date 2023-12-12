SELECT * from actors

DELETE FROM actors WHERE actor_id IN (21)

UPDATE actors SET age = '08-10-1970' WHERE actor_id=1

UPDATE actors SET gender = 'female' WHERE actor_id=8
UPDATE actors SET gender = 'male' WHERE actor_id=1
UPDATE actors SET gender = 'male' WHERE actor_id=4

INSERT INTO actors (first_name, last_name, age, number_oscars, gender) 
VALUES 
('Brad', 'Pitt', '18-12-1963', '4', 'male'), 
('Will', 'Smith', '25-09-1965', '1', 'male'),
('Julia', 'Roberts', '28-10-1967', '4', 'female'),
('Pierce', 'Brosnan', '16-05-1953', '2', 'male')

CREATE TABLE movies (
    movie_id SERIAL,
    movie_name VARCHAR(50) NOT NULL, 
    release_date DATE NOT NULL,
    main_actors VARCHAR(200)
	PRIMARY KEY (movie_id)
);
