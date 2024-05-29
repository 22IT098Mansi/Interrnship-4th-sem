const a = [
    {name: 'prakash', mobile: '7894567898'},
    {name: 'anshuman', mobile: '8794564784'}
  ];
  
  const output = a.map(obj => {
    const firstName = obj.name.split(' ')[0];
    return {firstName, mobilePhone: obj.mobile};
  });
  
  console.log(output);