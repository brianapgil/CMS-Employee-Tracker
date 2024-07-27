const inquirer = require("inquirer")
const { Pool } = require('pg');
const path = require("path")
const dotenv = require('dotenv');
const { addDepartmentQuestions, addEmployeeQuestions, menuQuestions, addRoleQuestions } = require("./questions")
const envPath = path.resolve(__dirname, '.env');
console.log(envPath)
dotenv.config({ path: envPath });
// Specify the path to your .env file
console.log(process.env.USER)
const pool = new Pool(
  {
    // Enter PostgreSQL username
    user: "postgres",
    // Enter PostgreSQL password
    password: "cornflake",
    host: 'localhost',
    database: "employeetracker_db",
  },
  console.log('Connected to the employeetracker_db database!')
)

pool.connect();

//Function to access main menu
async function mainMenu() {
  const answer = await inquirer.prompt(menuQuestions);
  console.log(answer);
  switch (answer.answer) {
    case 'viewEmployees':
      //Call viewEmployees function
      viewEmployees();
      break;
    case 'addEmployee':
      //Call addEmployee function
      addEmployee();
      break;
    case 'updateRole':
      //Function to update employee role
      break;
    case 'viewRoles':
      //Call viewRoles function
      viewRoles();
      break;
    case 'addRole':
      //Call addRole function
      addRole();
      break;
    case 'viewDepartments':
      //Call viewDepartments function
      viewDepartments();
      break;
    case 'addDepartment':
      //Call addDepartment function
      break;
  }
}

//Call main menu function
mainMenu();

//Function to view all employees
async function viewEmployees() {
  pool.query(`SELECT * FROM employee`,  (err, departmentResults) => {
    if (err) {
      console.log(err);
    }
    const departmentRows = departmentResults.rows;
    console.log("\n");
    console.table(departmentRows);
  });
  mainMenu();
}

//Function to add employee
async function addEmployee() {
  const answer = await inquirer.prompt(addEmployeeQuestions);
  const queryText = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) returning *`
  const manager_id = answer.manager_id.length > 0 ? answer.manager_id: null
  console.log(manager_id);
  const userInput = [answer.first_name, answer.last_name, answer.role_id, manager_id]
  const res = await pool.query(queryText, userInput)
  console.log("\n");
    console.table(res.rows[0]);
}

//Function to update employee role

//Function to view all roles
async function viewRoles() {
  pool.query(`SELECT * FROM role`,  (err, departmentResults) => {
    if (err) {
      console.log(err);
    }
    const departmentRows = departmentResults.rows;
    console.log("\n");
    console.table(departmentRows);
  });
  mainMenu();
}

//Function to add role
async function addRole() {
  const answer = await inquirer.prompt(addRoleQuestions);
  const queryText = `INSERT INTO role(title, salary, department_id) VALUES ($1, $2, $3) returning *`
  const department_id = answer.department_id.length > 0 ? answer.department_id: null
  console.log(department_id);
  const userInput = [answer.title, answer.salary, department_id]
  const res = await pool.query(queryText, userInput)
  console.log("\n");
    console.table(res.rows[0]);
}

//Function to view all departments
async function viewDepartments() {
  pool.query(`SELECT * FROM department`,  (err, departmentResults) => {
    if (err) {
      console.log(err);
    }
    const departmentRows = departmentResults.rows;
    console.log("\n");
    console.table(departmentRows);
  });
  mainMenu();
}

//Function to add department
async function addDepartment() {
  const answer = await inquirer.prompt(addDepartmentQuestions);
  const queryText = `INSERT INTO deparment(name) VALUES ($1) returning *`
  const userInput = answer.name
  const res = await pool.query(queryText, userInput)
  console.log("\n");
    console.table(res.rows[0]);
}

