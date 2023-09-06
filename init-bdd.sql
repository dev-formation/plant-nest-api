DROP DATABASE plantu;
CREATE DATABASE plantu;

-- Je me connecte à ma base de donnée créée si vous executez le script dans PSQL shell
--\c plantu

CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE plant (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100),
  soleil VARCHAR(255),
  arrosage INT,
  categorie VARCHAR(255),
  image VARCHAR(255),
  user_id INT NOT NULL,
  CONSTRAINT fk_plant_user FOREIGN KEY (user_id) REFERENCES "user"(id)
);

-- Si la table a déjà été créée mais que vous voulez y ajouter une nouvelle colonne
-- ALTER TABLE plant ADD user_id INT;
-- ALTER TABLE plant ADD CONSTRAINT fk_plant_user FOREIGN KEY (user_id) REFERENCES "user"(id);