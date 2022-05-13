-- Drops the employment_db if it exists currently --
DROP DATABASE IF EXISTS employment_db;
-- Creates the employment_db database --
CREATE DATABASE employment_db;
USE DATABASE employment_db

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,

  
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL 
  department_id INT
  
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT