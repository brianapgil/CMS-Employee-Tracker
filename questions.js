const menuQuestions = [
    {
        type: 'list',
        name: 'answer',
        message: 'What would you like to do?',
        choices: [{name: 'View All Employees', value: 'viewEmployees'}, {name: 'Add Employee', value: 'addEmployee'}, 
            {name: 'Update Employee Role', value: 'updateRole'}, {name: 'View All Roles', value: 'viewRoles'},
            {name: 'Add Role', value: 'addRole'}, {name: 'View All Departments', value: 'viewDepartments'},
            {name: 'Add Department', value: 'addDepartment'}
        ]
    }
];
const addEmployeeQuestions = [
    {
        name: 'first_name',
        message: "What is the employee's first name?"
    },
    {
        name: 'last_name',
        message: "What is the employee's last name?"
    },
    {
        name: 'role_id',
        message: "What is the employee's role ID?"
    },
    {
        name: 'manager_id',
        message: "Enter employee's manager ID if it exists."
    }
];

const addRoleQuestions = [
    {
        name: 'title',
        message: "What is the title of the role?"
    },
    {
        name: 'salary',
        message: "What is the salary of the role?"
    },
    {
        name: 'department_id',
        message: "What is the role's department ID if it exists?"
    }
];
const addDepartmentQuestions = [
    {
        name: 'name',
        message: "What is the name of the department?"
    }
];

module.exports = {menuQuestions,addEmployeeQuestions,addDepartmentQuestions,addRoleQuestions}