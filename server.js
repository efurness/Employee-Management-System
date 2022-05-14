// require/install inquirer, express and mysql2
const inquirer = require('inquirer');
const express = require('express');
const mysql2 = require('mysql2');
const { response } = require('express');
const [ startPrompt, addDepartmentPrompt, addRolePrompt, addEmployeePrompt ],

const allEmployees = [];
cosnt allDepartments = [];
const allRoles = [];

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
  
// function to initialize app
async function begin() {
    const yourAnswer = await inquirer.prompt(question.question);


        switch(yourAnswer.start) {
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
                viewEmployees();
                break;
                default:
        }
    }             

// Query database
db.query('SELECT * FROM employment.db', function (err, results) {
    console.log(results);
  });

  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  