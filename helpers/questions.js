    const startPrompt = () => {
        inquirer.prompt([

            {
                type: "list",
                message: "choose an option",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "update an employee role", "update employee managers", "delete employee", "delete role", "delete department"],
                name: "prompt",
            }
        ])
    },

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



modules.exports = startPrompt, addDepartmentPrompt, addRolePrompt, addEmployeePrompt, updateRolePrompt