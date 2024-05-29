const employees = [{name:'Rahul Patel'},{name:'Karan Patel'},{name:'Shubham Tayal'},{name:'rahul patel'},{name:'Prakash shah'}];

const uniqueEmployeeNames = [...new Set(employees.map(employee => employee.name.toLowerCase()))];

console.log(uniqueEmployeeNames);