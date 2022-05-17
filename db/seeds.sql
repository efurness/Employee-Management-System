USE employment_db;

INSERT INTO department (dept_name)
VALUES ("IT"), ("DESIGN"), ("ATHROPOLOGY"), ("SCIENCE"),("WEB")

INSERT INTO emprole (title, salary, department_id)
VALUES (LEAD, 80000, 1),
(COMPUTER ANALYST, 60000, 1),
(ENGINEER, 75000, 1)
(PROGRAMMER, 60000, 1)
(ASSOCIATE, 60000, 1),
(LEAD DESIGNER, 75000, 2)
(GRAPHICS, 45000, 2)
(FRONTEND, 75000, 2)
(CSS, 75000, 2),
INTERN, 10000, 2),
(PROFESSER, 75000, 3)
(ASSOCIATE, 45000, 3)
(STUDENT, 0, 3)
(TA, 20000, 3,
(INTERN, 10000, 3),
(LEAD SCIENTIST, 60000, 4),
(ARCHOLOGIST, 60000, 4),
(FRONT DESK, 30000, 4),
(STUDENT, 0, 4)
(TEACHING ASSISTANT, 21000, 5),
(LEAD DEVELOPER, 110000, 5)
(BACKEND, 80000, 5)
(FRONTEND, 75000, 5)
(CSS, 75000, 5),
INTERN, 10000, 5)

INSERT INTO employee {first_name, last_name, role_id, manager_id}
VALUES (Abitha, Harley, 1, 1),
 (Arnie, Halloway, 2, 1),
 (Betty, Arnes, 3, 1),
 (Lolly, Pop, 4, 1),
 (Stephanie, Ingram, 5, 2),
 (Jennifer, Lange, 1, 2),
 (Monty, Carlo, 1, 2)
 (Larry, Hogan, 1, 2)
 (Betsy, Smith, 1, 2)
 (Robert, Dwyer, 1, 3)
 (Bugs, Mee, 1, 3)
 (Aspen, Tree, 1, 3)
 (Charlie, Chap, 1, 3)
 (Denice, Hicks, 1, 4)
 (Santana, Moss 1, 5)

 SELECT employee.first_name, employee.last_name, employee.title, employee.salary, department.department_id,
 FROM employee JOIN emprole ON employee.role_id = emprole.id JOIN department

 SELECT * FROM department;
 SELECT * FROM emprole;
 SELECT * FROM employee
