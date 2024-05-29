const a = [
    {name: 'prakash', mobile: '7894567898'},
    {name: 'anshuman', mobile: '8794564784'}
  ];
  
  const output = a.map(obj => {
    const name = obj.name;
    const mobile = obj.mobile;
    return `Name is ${name} and mobile number is ${mobile}`;
  });
  
  console.log(output);