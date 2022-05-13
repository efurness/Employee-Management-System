const startPrompt = [
    {
        type:"list",
        message: "choose an option",
        choices: ["View all employees", "View all roles", "View all employees", "Add a role", "Add an employee", "update an employee role"],
        name: "prompt",
    }
];

const addDepartmentPrompt = [
    {
        type:"input",
        message: "what is the name of the department you wish to add?",
        name: "addDepartment",
    }
];
const addRolePrompt = [
    {
        type:"input",
        message: "what is the name of the role you wish to add?",
        name: "addRole",
    }
];
