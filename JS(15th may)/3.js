const employees = [{name:'Rahul Patel'},{name:'Karan Patel'},{name:'Shubham Tayal'},{name:'rahul patel'},{name:'Prakash shah'}];

const countedEmployees = employees.reduce((acc, employee) => {
  const name = employee.name.toLowerCase();
  if (acc[name]) {
    acc[name]++;
  } else {
    acc[name] = 1;
  }
  return acc;
}, {});

console.log(countedEmployees);