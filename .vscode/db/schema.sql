-- Drops the employment_db if it exists currently --
DROP DATABASE IF EXISTS employment_db;
-- Creates the employment_db database --
CREATE DATABASE employment_db;

USE DATABASE employment_db

CREATE TABLE department (
  id INT , AUTOINCREMENT, NOT NULL,
  dept_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),


);

CREATE TABLE emprole (
  id INT , AUTOINCREMENT, NOT NULL,
  title VARCHAR(30), NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id),
  REFERENCES department(id),
  ON DELETE CASCADE,
  PRIMARY KEY (id)
  
);

CREATE TABLE employee (
  id INT , AUTOINCREMENT, NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (role_id),
  REFERENCES employee(id),
  ON DELETE CASCADE
  PRIMARY KEY (id)