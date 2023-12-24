-- Table: public.menu_items

-- DROP TABLE IF EXISTS public.menu_items;

CREATE TABLE IF NOT EXISTS public.menu_items
(
    item_id integer NOT NULL DEFAULT nextval('menu_items_item_id_seq'::regclass),
    item_name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    item_price smallint DEFAULT 0,
    CONSTRAINT menu_items_pkey PRIMARY KEY (item_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.menu_items
    OWNER to postgres;