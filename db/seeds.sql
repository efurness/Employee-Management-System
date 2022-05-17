USE employment_db;

INSERT INTO departments (department_name)
VALUES
('IT'), 
('DESIGN'),
('ATHROPOLOGY'), 
('SCIENCE'),
('WEB');

INSERT INTO roles (title, department_id, salary)
VALUES 
('LEAD', 1, 80000),
('COMPUTER ANALYST', 1, 60000),
('ENGINEER', 1, 75000),
('PROGRAMMER', 1, 60000),
('ASSOCIATE', 1, 60000),
('LEAD DESIGNER', 2, 75000),
('GRAPHICS', 2, 45000),
('FRONTEND', 2, 75000),
('CSS', 2, 75000),
('INTERN', 2, 10000),
('PROFESSER', 3,75000),
('ASSOCIATE', 3, 45000),
('STUDENT', 3,  10000),
('TA', 3, 20000),
('INTERN', 3, 10000),
('LEAD SCIENTIST', 4, 60000),
('ARCHOLOGIST', 4, 60000),
('FRONT DESK', 4, 30000),
('STUDENT', 4, 10000),
('TEACHING ASSISTANT', 5, 21000),
('LEAD DEVELOPER', 5, 80000),
('BACKEND', 5, 80000),
('FRONTEND', 5, 75000),
('CSS', 5, 75000),
('INTERN', 5, 10000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Abitha', 'Harley', 1, 1),
('Arnie', 'Halloway', 2, 1),
('Betty', 'Arnes', 3, 1),
('Lolly', 'Pop', 4, 1),
('Stephanie', 'Ingram', 5, 2),
('Jennifer', 'Lange', 6, 2),
('Monty', 'Carlo', 7, 2),
('Larry', 'Hogan', 8, 2),
('Betsy', 'Smith', 9, 2),
('Robert', 'Dwyer', 10, 3),
('Bugs', 'Mee', 11, 3),
('Aspen', 'Tree', 12, 3),
('Charlie', 'Chap', 13, 3),
('Denice', 'Hicks', 14, 4),
('Santana', 'Moss', 15, 5);

 SELECT * FROM departments;
 SELECT * FROM roles;
 SELECT * FROM employees

