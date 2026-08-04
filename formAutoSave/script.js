let userForm = document.querySelector("#userForm");
let clearForm = document.querySelector("#clearForm");


let time;

userForm.addEventListener("input", (e) => {
  clearTimeout(time);
  time = setTimeout(() => {
    let genderElement = document.querySelector('input[name="gender"]:checked');

    let userFormsData = {
      firstName: document.querySelector("#firstName").value,
      email: document.querySelector("#email").value,
      phoneNumber: document.querySelector("#phone").value,
      gender: genderElement ? genderElement.value : "",
      bio: document.querySelector("#bio").value,
    };

    localStorage.setItem("userFormsData", JSON.stringify(userFormsData));

     
  }, 500);

 
});

// 2. Restore Data on Page Load

let savedData = localStorage.getItem("userFormsData");


// Check localStorage data exists or not
if (savedData) {

  // Convert string → object
  let data = JSON.parse(savedData);


  // Restore First Name
  document.querySelector("#firstName").value =
    data.firstName;


  // Restore Email
  document.querySelector("#email").value =
    data.email;


  // Restore Phone
  document.querySelector("#phone").value =
    data.phoneNumber;


  // Restore Bio
  document.querySelector("#bio").value =
    data.bio;


  // Restore Gender
  if (data.gender) {

    document.querySelector(
      `input[name="gender"][value="${data.gender}"]`
    ).checked = true;

  }

  console.log("Data Restored!");
}

// new user data add kar sakta hai 
clearForm.addEventListener("click", () => {
  localStorage.removeItem("userFormsData");
  userForm.reset();
});