// require/install inquirer, express and mysql2
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
// const connection = require('mysql2/typings/mysql/lib/Connection');


// process environment port for Heroku and local host 3001 port
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      dialect: 'mysql',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'employment_db'
    },
    console.log(`Connected to the employment_db database.`)
);

db.connect((err) => {
    if(err){
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
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "update an employee role", "update employee managers", "delete employee", "delete role", "delete department"],
            name: "prompt",
        }
    
    ]).then(function(choice){
        switch(choice.prompt) {
            case 'View all Departments':
                viewDepartmemts();
                break;
            case 'Add a Department':
                AddDepartmemts();
                break;
            case 'View all Roles':
                viewRoles();
                break;
            case 'Add Role':
                addRole();
                break;    
            case 'View all Employees':
                viewEmployees();
                break;
            case 'Update Employee Role':
                updateEmployees();
                break;
            case 'Update Employee Managers':
                 updateEmployeeManager();
                break;
            case 'Delete Employee':
                deleteEmployee();
                break;
            case 'Delete role':
                deleteEmployee();
                break;
            case 'Delete Department':
                deleteEmployee();
                break;
                default:
                    exit()         
        }
    })

    

    


        
    }    
    

    const addDepartmentPrompt = () => {
        inquirer.prompt([

            {
                type: "input",
                message: "what is the name of the department you wish to add?",
                name: "addDepartment",
            }
        ])
    }

    const addRolePrompt = () => {
        inquirer.prompt([
            
            {
                type: "input",
                message: "what is the name of the role you wish to add?",
                name: "addRole",
            }
        ]) .then(function(data) {
            db.query('SELECT * FROM department', function (err, results) {
                console.log(results);
              });
            inquirer.prompt([

            {
                type: "list",
                message: "What department do you want your role to belong to?",
                name: "addType",
                choices: [("IT"), ("DESIGN"), ("ATHROPOLOGY"), ("SCIENCE"),("WEB")]

                
            }])
        })
    }
    const addEmployeePrompt = () => {
        inquirer.prompt([

            {
                type: "input",
                message: "what is the name of the employee you wish to add?",
                name: "addEmployee",

            }
        ])
    }

    const updateRolePrompt = () => {
        inquirer.prompt([

            {
                type: "input",
                message: "what role do you wish to update?",
                name: "updateRole",
            }

        ])

    }



viewDept = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.table(res);
        begin()
    });
},

viewEmp = () => {
    connection.query("SELECT * employee", (err, res) => {
        if (err) throw err;
        console.table(res);
        begin()
    });
},

viewRoles = () => {
    connection.query("SELECT title FROM employee", (err, res) => {
        if (err) throw err;
        console.table(res);
        begin()
    });
},

viewEmpManager = () => {
    connection.query("SELECT manager_id FROM employee" , async (err, employee) => {
        if (err) throw err;
        console.table(res);
        begin()
    });
},
UpdateEmp = () => {
    connection.query("UPDATE employee FROM employee" , async (err, employee) => {
        if (err) throw err;
        console.table(res);
        begin()
    });
},

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

  let deletedRow = 2;

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

  