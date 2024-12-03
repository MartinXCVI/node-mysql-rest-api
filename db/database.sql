CREATE DATABASE IF NOT EXISTS company_db

USE company_db

CREATE TABLE employees (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) DEFAULT NULL
  salary INT(5) DEFAULT NULL
  PRIMARY KEY(id)
)

INSERT INTO employees VALUES
  (1, 'Joe', 1000),
  (2, 'Henry', 2000),
  (3, 'Sam', 3000),
  (4, 'Max', 1500);