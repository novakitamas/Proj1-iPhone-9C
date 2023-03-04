function calculateAgetamas() {
  // get the birthdate from the HTML element
  let birthdate = "2006-05-29";

  // calculate the age in years
  let today = new Date();
  let birthdateObj = new Date(birthdate);
  let age = today.getFullYear() - birthdateObj.getFullYear();
  let monthDiff = today.getMonth() - birthdateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
    age--;
  }

  // display the age in the HTML element
  let kortamas =age;
  document.getElementById("kortamas").textContent = kortamas;
}

function calculateAgebence() {
  // get the birthdate from the HTML element
  let birthdate = "2007-03-19";

  // calculate the age in years
  let today = new Date();
  let birthdateObj = new Date(birthdate);
  let age = today.getFullYear() - birthdateObj.getFullYear();
  let monthDiff = today.getMonth() - birthdateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
    age--;
  }

  // display the age in the HTML element
  let korbence =age;
  document.getElementById("korbence").textContent = korbence;
}