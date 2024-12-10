## Schema DB
Due tabelle:
- movies
- reviews

*movies*
- id | INT | PK | NOTNULL | AUTO_INCREMENT
- title | VARCHAR(255) | NOTNULL
- director | VARCHAR(255) | NOTNULL
- genre | VARCHAR(255) | NULL
- release_year | YEAR | NULL
- abstract | TEXT | NULL
- image | VARCHAR(255) | NULL
- created_at | TIMESTAMP | NOTNULL
- updated_at | TIMESTAMP | NOTNULL

*reviews*
- id | INT | PK | NOTNULL | AUTO_INCREMENT
- movie_id | INT | FK | NOTNULL
- name | VARCHAR(255) | NOTNULL
- vote | TINYINT | NOTNULL
- text | TEXT | NULL
- created_at | TIMESTAMP | NOTNULL
- updated_at | TIMESTAMP | NOTNULL