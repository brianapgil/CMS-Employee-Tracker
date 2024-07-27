INSERT INTO department (name) 
VALUES ('Marketing'),
('Human Resources');


INSERT INTO role (title, salary, department_id) 
VALUES ('Head of Marketing', 70000, 1), 
('Head of Human Resources', 60000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Anne', 'Smith', 1, NULL), 
('Todd', 'Parker', 2, NULL);
