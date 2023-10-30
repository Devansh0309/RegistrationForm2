let err = false;
let countFilled=0
let firstNameFilled=false
let lastNameFilled=false
let emailFilled=false
let professionFilled=false
let phoneNumberFilled=false
let countryFilled=false
let genderChecked=false
let tncChecked=false

let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let email = document.getElementById("email");
  let profession = document.getElementById("profession");
  let phoneNumber = document.getElementById("phone-number");
  let country = document.getElementById("countries");
  let maleGender = document.getElementById("male-gender");
  let femaleGender = document.getElementById("female-gender");
  let tnc = document.getElementById("tnc");

function isValid(fieldToValidate) {

  // first name
  if (fieldToValidate === "first-name") {
    if (
      firstName.value.length >= 3 &&
      /^[a-zA-Z\s.,]+$/.test(firstName.value) && !firstNameFilled
    ) {
      document.getElementById("first-name-invalid").style.display = "none";
      document.getElementById("first-name-valid").style.display = "block";
      firstNameFilled=true
      countFilled++
      err=false
    } else {
      if(firstNameFilled){
        firstNameFilled=false
        countFilled--}
      document.getElementById("first-name-invalid").style.display = "block";
      document.getElementById("first-name-valid").style.display = "none";
      err = true;
    }
  }

  // last name
  if (fieldToValidate === "last-name") {
    if (lastName.value.length >= 3 && /^[a-zA-Z\s.,]+$/.test(lastName.value) && !lastNameFilled) {
      document.getElementById("last-name-invalid").style.display = "none";
      document.getElementById("last-name-valid").style.display = "block";
      lastNameFilled=true
      countFilled++
      err=false
    } else {
      if(lastNameFilled){
        lastNameFilled=false
        countFilled--}
      document.getElementById("last-name-invalid").style.display = "block";
      document.getElementById("last-name-valid").style.display = "none";
      err = true;
    }
  }

  // email
  if (fieldToValidate === "email") {
    if (
      email.value.length >= 6 &&
      email.value.includes("@") &&
      email.value.includes(".") &&
      email.value.indexOf("@") > 0 &&
      email.value.indexOf("@") == email.value.lastIndexOf("@") &&
      email.value.length - email.value.indexOf(".") >= 3 &&
      email.value.indexOf(".") - email.value.indexOf("@") >= 2 && !emailFilled
    ) {
      document.getElementById("email-invalid").style.display = "none";
      document.getElementById("email-valid").style.display = "block";
      emailFilled=true
      countFilled++
      err=false
    } else {
      if(emailFilled){
        emailFilled=false
        countFilled--}
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("email-valid").style.display = "none";
      err = true;
    }
  }

  // profession
  if (fieldToValidate === "profession") {
    if (profession.value && !professionFilled) {
      document.getElementById("profession-invalid").style.display = "none";
      document.getElementById("profession-valid").style.display = "block";
      professionFilled=true
      countFilled++
      err=false
    } else {
      if(professionFilled){
        professionFilled=false
        countFilled--}
      document.getElementById("profession-invalid").style.display = "block";
      document.getElementById("profession-valid").style.display = "none";
      err = true;
    }
  }

  // phone
  if (fieldToValidate === "phone") {
    if (
      phoneNumber.value.length == 10 &&
      parseInt(phoneNumber.value).toString().length == 10 && !phoneNumberFilled
    ) {
      document.getElementById("phone-number-invalid").style.display = "none";
      document.getElementById("phone-number-valid").style.display = "block";
      phoneNumberFilled=true
      countFilled++
      err=false
    } else {
      if(phoneNumberFilled){
        phoneNumberFilled=false
        countFilled--}
      document.getElementById("phone-number-invalid").style.display = "block";
      document.getElementById("phone-number-valid").style.display = "none";
      err = true;
    }
  }

  // country
  if (fieldToValidate === "country") {
    if (country.value == "Select Country...") {
      if(countryFilled){
        countryFilled=false
        countFilled--}
      document.getElementById("country-invalid").style.display = "block";
      document.getElementById("country-valid").style.display = "none";
      err = true;
    } else if(!countryFilled) {
      document.getElementById("country-invalid").style.display = "none";
      document.getElementById("country-valid").style.display = "block";
      countryFilled=true
      countFilled++
      err=false
    }
  }
  // gender
  if (fieldToValidate === "gender") {
    if ((maleGender.checked || femaleGender.checked) && !genderChecked) {
      document.getElementById("gender-invalid").style.display = "none";
      document.getElementById("gender-valid").style.display = "block";
      genderChecked=true
      countFilled++
      err=false
    } else {
      if(genderChecked){
        genderChecked=false
        countFilled--}
      document.getElementById("gender-invalid").style.display = "block";
      document.getElementById("gender-valid").style.display = "none";
      err=true
    }
  }

  // tnc
  if (fieldToValidate === "tnc") {
    if (!tnc.checked) {
      if(tncChecked){
        tncChecked=false
        countFilled--}
      document.getElementById("tnc-invalid").style.display = "block";
      err = true;
    } else if(!tncChecked) {
      tncChecked=true
      countFilled++
      document.getElementById("tnc-invalid").style.display = "none";
      err=false
    }
  }
  // console.log(err)
}
function addSubmAttributes() {
  let subm = document.getElementById("submit-btn");
  console.log(err)
  if (!err && firstNameFilled && lastNameFilled && emailFilled && professionFilled && phoneNumberFilled && countryFilled && genderChecked && tncChecked) {
    console.log("submit pressed");
    subm.setAttribute("disabled",false)
    // subm.setAttribute("data-bs-toggle", "modal");
    // subm.setAttribute("data-bs-target", "#staticBackdrop");
  }
}
function reset() {
  let subm = document.getElementById("submit-btn");
  
  // subm.setAttribute("data-bs-toggle", "modal");
  
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  profession.value = "";
  phoneNumber.value = "";
  country.value = "";
  maleGender.checked = false;
  femaleGender.checked = false;
  tnc.checked = false;
  document.getElementById("first-name-valid").style.display = "none";
  document.getElementById("last-name-valid").style.display = "none";
  document.getElementById("email-valid").style.display = "none";
  document.getElementById("profession-valid").style.display = "none";
  document.getElementById("phone-number-valid").style.display = "none";
  document.getElementById("country-valid").style.display = "none";
  document.getElementById("gender-valid").style.display = "none";
  // alert("Your details have been saved successfully!");
}
function checks() {
  console.log("checked", "line 120");
  console.log(countries);
  let maleGender = document.getElementById("male-gender");
  let femaleGender = document.getElementById("female-gender");
  if (maleGender.checked) {
    document.getElementById("female").style.display = "none";
  } else if (femaleGender.checked) {
    document.getElementById("male").style.display = "none";
  } else {
    document.getElementById("female").style.display = "inline";
    document.getElementById("male").style.display = "inline";
  }
}
