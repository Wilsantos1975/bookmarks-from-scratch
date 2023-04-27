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

CREATE TABLE users {
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT
}

