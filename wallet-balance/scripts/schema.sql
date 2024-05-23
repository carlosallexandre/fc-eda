CREATE DATABASE IF NOT EXISTS wallet;

USE wallet;

CREATE TABLE IF NOT EXISTS accounts (
  id varchar(255) NOT NULL,
  balance int default 0,
  last_modified_at timestamp DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (id)
);