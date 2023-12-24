CREATE TABLE IF NOT EXISTS public.students
(
    id integer NOT NULL DEFAULT nextval('students_id_seq'::regclass),
    last_name character varying(300) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(300) COLLATE pg_catalog."default" NOT NULL,
    birth_date date NOT NULL,
    CONSTRAINT students_pkey PRIMARY KEY (id)
)