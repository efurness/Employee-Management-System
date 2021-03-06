// require/install inquirer, express and mysql2
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
// const connection = require('mysql2/typings/mysql/lib/Connection');


// process environment port for Heroku and local host 3001 port
const PORT = process.env.PORT || 3002;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // dialect: 'mysql',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '',
        database: 'employment_db'
    },
    console.log(`Connected to the employment_db database.`)
);

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql Connected..')
});

// function to initialize app
async function begin() {
    inquirer.prompt([
        {
            type: "list",
            message: "choose an option",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "update a role", "View employee manager", "update employee managers", "delete employee", "delete role", "delete department"],
            name: "prompt",
        }

    ]).then(function (choice) {
        switch (choice.prompt) {
            case 'View all departments':
                viewDepartmemts();
                break;
            case 'Add a department':
                AddDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'Add a role':
                AddRoles();
                break;  
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add an employee':
                AddEmployee();
                break;
            case 'update roles':
                updateRoles();
                break;
            case 'View employee manager':
                ViewEmployeeManager();
                break;
            case 'Update Employee Managers':
                updateEmployeeManager();
                break;
            // case 'Delete Employee':
            //     deleteEmployee();
            //     break;
            // case 'Delete role':
            //     deleteEmployee();
            //     break;
            // case 'Delete Department':
            //     deleteEmployee();
            //     break;
            default:
                text = "End of questions"
                break;
        }
    })

}

    const viewDepartmemts = () => {
        db.query("SELECT * FROM departments", (err, res) => {
        if (err) throw err;
        console.table(res);
        begin()
    });

    }

    const viewRoles = () => {
        db.query("SELECT * FROM roles", (err, res) => {
            if (err) throw err;
            console.table(res);
            begin()
        });

    }

    const viewEmployees = () => {
        db.query("SELECT * FROM employees", (err, res) => {
            if (err) throw err;
            console.table(res);
            begin()
        });
    }

    const ViewEmployeeManager = () => {
        db.query("SELECT manager_id FROM employees", async (err, res) => {
            if (err) throw err;
            console.table(res);
            begin()
        });
    }
    const updateEmployeeManager = () => {
        db.query("UPDATE employee FROM employees", async (err, res) => {
            if (err) throw err;
            console.table(res);
            begin()
        });
    }

    const AddDepartments = () => {
    inquirer.prompt([

        {
            type: "input",
            message: "what is the name of the department you wish to add?",
            name: "addDepartment",
        }

    ]).then(function (data) {
        db.promise().query(`INSERT INTO departments (department_name) VALUES ('${data.addDepartment}')`);
    })

    const AddRoles = () => {
    inquirer.prompt([

                {
                    type: "input",
                    message: "what is the name of the role you wish to add?",
                    name: "addRole",
                },

            ]).then(function (data) {
                db.promise().query(`INSERT INTO roles (title, salary, department_id) VALUES ('${data.addRole}')`);
            })
                inquirer.prompt([

                    {
                        type: "list",
                        message: "What department do you want your role to belong to?",
                        name: "addType",
                        choices: [('IT'), ('DESIGN'), ('ATHROPOLOGY'), ('SCIENCE'), ('WEB')]


                    }])
            }
        }
  
         
        db.query('INSERT INTO employee (first_name, last_name) VALUES ("Ellen", "F")', function (_err, results) {
            console.log(results);
        });

         const updateRoles = () => {
            inquirer.prompt([

                {
                    type: "input",
                    message: "what role do you wish to update?",
                    name: "updateRole",
                }

            ])

        }

        const AddEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "what is the first name of the employee you wish to add?",
            name: "first_name"
        },
        {
            type: "input",
            message: "what is the last name of the employee you wish to add?",
            name: "last_name",
        },]).then(function (data) {
                db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, 1, 1);', [data.first_name, data.last_name], function (err, results) {
                    if (err) throw err;
                    viewEmployees();
                    begin();
                });

            })
        }



        

            // Query database
            // db.query('SELECT * FROM department', function (err, results) {
            //     console.log(results);
            //   });

            //   db.query('SELECT * FROM employee.first_name, employee.last_name, employee.role_id, employee.manager_id', function (err, results) {
            //     console.log(results);
            //   });

            //   db.query('SELECT title FROM emprole', function (err, results) {
            //     console.log(results);
            //   });  



            // Default response for any other request (Not Found)
            app.use((req, res) => {
                res.status(404).end();
            });

        // let deletedRow = 2; dse

        // db.query(`DELETE FROM department WHERE id = ?`, deletedRow, (err, result) => {
        //   if (err) {
        //     console.log(err);
        //   }
        //   console.log(result);
        // });

        // db.query(`DELETE FROM employee WHERE id = ?`, deletedRow, (err, result) => {
        //   if (err) {
        //     console.log(err);
        //   }
        //   console.log(result);
        // });

        // db.query(`DELETE FROM emprole WHERE id = ?`, deletedRow, (err, result) => {
        //   if (err) {
        //     console.log(err);
        //   }
        //   console.log(result);
        // });

        app.listen(PORT, () => {

            console.log(`Server running on port ${PORT}`);
            begin()
        });

        