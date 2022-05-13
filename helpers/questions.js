const startPrompt = [
    {
        type:"list",
        message: "choose an option",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add an employee", "update an employee role"],
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

const addEmployeePrompt = [
    {
        type:"input",
        message: "what is the name of the employee you wish to add?",
        name: "addEmployee",
    }
];

const updateRolePrompt = [
    {
        type:"input",
        message: "what role do you wish to update?",
        name: "updateRole",
    }
];

modules.exports = {startPrompt, addDepartmentPrompt, addRolePrompt, updateRolePrompt};