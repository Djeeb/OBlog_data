BEGIN;

CREATE TABLE public.category
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text NOT NULL,
    route text NOT NULL
);

CREATE TABLE public.post
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    content text,
    slug text NOT NULL,
    excerpt text,
    category_id integer NOT NULL REFERENCES category(id)
);

END;