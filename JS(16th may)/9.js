const a = [
    {name: 'prakash', mobile: '7894567898', age: 24},
    {name: 'anshuman', mobile: '8794564784', age: 21}
  ];
  
  const output = a.filter(obj => obj.age > 22);
  
  console.log(output);