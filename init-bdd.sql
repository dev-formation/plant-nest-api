CREATE DATABASE plantu;

CREATE TABLE plant (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100),
  soleil VARCHAR(255),
  arrosage INT,
  categorie VARCHAR(255),
  image VARCHAR(255)
);