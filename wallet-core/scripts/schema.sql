CREATE DATABASE IF NOT EXISTS wallet;

USE wallet;

CREATE TABLE IF NOT EXISTS clients (
  id varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS accounts (
  id varchar(255) NOT NULL,
  client_id varchar(255) NOT NULL,
  balance int default 0,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (id),
  CONSTRAINT fk_client_account FOREIGN KEY (client_id) REFERENCES clients (id)
);

CREATE TABLE IF NOT EXISTS transactions (
  id varchar(255) NOT NULL,
  account_id_from varchar(255) NOT NULL, 
  account_id_to varchar(255) NOT NULL, 
  amount int NOT NULL, 
  created_at timestamp DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (id),
  CONSTRAINT fk_tran_acc_from FOREIGN KEY (account_id_from) REFERENCES accounts (id),
  CONSTRAINT fk_tran_acc_to FOREIGN KEY (account_id_to) REFERENCES accounts (id)
);