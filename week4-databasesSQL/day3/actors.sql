
-- Table: public.actors

-- DROP TABLE IF EXISTS public.actors;

CREATE TABLE IF NOT EXISTS public.actors
(
    actor_id integer NOT NULL DEFAULT nextval('actors_actor_id_seq'::regclass),
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    age date NOT NULL,
    number_oscars smallint NOT NULL,
    gender character varying COLLATE pg_catalog."default",
    CONSTRAINT actors_pkey PRIMARY KEY (actor_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.actors
    OWNER to postgres;

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
