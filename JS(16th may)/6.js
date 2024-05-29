function ageCalculator() {
    var userinput = document.getElementById("birthdate").value;
    var dob = new Date(userinput);
  
    if (userinput === '') {
      document.getElementById("message").innerHTML = "**Choose a date please!";
      document.getElementById("message").style.display = "block";
      return false;
    } else {
      document.getElementById("message").style.display = "none";
      var dobdobYear = dob.getUTCFullYear();
      var dobdobMonth = dob.getUTCMonth();
      var dobdobDate = dob.getUTCDate();
  
      var now = new Date();
      var currentYear = now.getUTCFullYear();
      var currentMonth = now.getUTCMonth();
      var currentDate = now.getUTCDate();
  
      var age = {};
      var ageString = "";
  
      var yearAge = currentYear - dobYear;
  
      if (currentMonth >= dobMonth)   
      var monthAge = currentMonth - dobMonth;  
    else {  
      yearAge--;  
      var monthAge = 12 + currentMonth - dobMonth;  
    }  
  
    if (currentDate >= dobDate)   
      var dateAge = currentDate - dobDate;  
    else {  
      monthAge--;  
      var dateAge = 31 + currentDate - dobDate;  
  
      if (monthAge < 0) {  
        monthAge = 11;  
        yearAge--;  
      }  
    }   
    age = {  
    years: yearAge,  
    months: monthAge,  
    days: dateAge  
    };  
        
    if (age.years > 0 && age.months > 0 && age.days > 0) {
       ageString = `${age.years} years, ${age.months} months, and ${age.days} days old.`;
    } else if (age.years === 0 && age.months === 0 && age.days > 0) {
       ageString = `Only ${age.days} days old!`;
    } else if (age.years > 0 && age.months === 0 && age.days === 0) {
       ageString = `${age.years} years old. Happy Birthday!!`;
    } else if (age.years > 0 && age.months > 0 && age.days === 0) {
       ageString = `${age.years} years and ${age.months} months old.`;
    } else if (age.years === 0 && age.months > 0 && age.days > 0) {
       ageString = `${age.months} months and ${age.days} days old.`;
    } else if (age.years > 0 && age.months === 0 && age.days > 0) {
       ageString = `${age.years} years, and ${age.days} days old.`;
    } else if (age.years === 0 && age.months > 0 && age.days === 0) {
       ageString = `${age.months} months old.`;
    } else {
       ageString = "Welcome to Earth! <br> It's first day on Earth!";
    }
  
      document.getElementById("result").innerHTML = `<p>${ageString}</p>`;
    }
  }