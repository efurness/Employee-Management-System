-- Drops the employment_db if it exists currently --
DROP DATABASE IF EXISTS employment_db;
-- Creates the employment_db database --
CREATE DATABASE employment_db;

USE employment_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  dept_name VARCHAR(30) NOT NULL
)

CREATE TABLE emprole (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id),
  REFERENCES department(id) 

);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL, 
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (department_id),
  REFERENCES emprole(id)
);
