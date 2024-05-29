//Find employee names 'patel' 

const employeeNames = [{name:'Rahul Patel'},{name:'Karan Patel'},{name:'Shubham Tayal'}];

const patelEmployees = employeeNames.filter(employee => employee.name.includes('Patel'));

console.log(patelEmployees);