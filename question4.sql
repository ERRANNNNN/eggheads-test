SELECT MAX(salary) as max_salary, department_id FROM `employees` GROUP BY department_id;
SELECT * FROM `employees` WHERE department_id = 3 AND salary > 90000;
ALTER TABLE `employees` ADD INDEX `department_id_index` (`department_id`); ALTER TABLE `employees` ADD INDEX `salary_index` (`salary`);