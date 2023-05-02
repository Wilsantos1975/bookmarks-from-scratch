-- If our database already exists, we can drop it and create a new one
DROP DATABASE IF EXISTS bookmarks_dev;
CREATE DATABASE bookmarks_dev; -- create a new database

\c bookmarks_dev; 

-- Create a table to store bookmarks
CREATE TABLE bookmarks (
  id SERIAL PRIMARY KEY,
  name TEXT,
  url TEXT,
  category TEXT,
  is_favorite BOOLEAN 
);

-- CREATE TABLE users {
--   id SERIAL PRIMARY KEY,
--   username TEXT,
--   password TEXT
-- }

-- reviews table
-- attributtes ? content, rating, bookmark_id, user_id, 0-5, reviewer, etc

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer TEXT,
  title TEXT,
  content TEXT,
  rating NUMERIC
  CHECK (rating >= 0 AND rating <= 5),
  bookmark_id INT REFERENCES bookmarks(id)
  ON DELETE CASCADE
);





