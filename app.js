console.log("ok...its worekig");

const register = document.querySelector("#submit");
console.log(register);

const saveUser = async () => {
  let emailId = document.getElementById("email").value;

  let pass = document.getElementById("password").value;
  console.log("Inside fetch method");
  console.log(emailId);
  console.log(pass);

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (pass == "" || !emailId.match(validRegex)) {
    alert("Please enter valid inputs");
    console.log("HELLO");
    return;
  }

  let response = await fetch("http://localhost:8080/users/save", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      emailId: emailId,
      password: pass,
    })
  });

  console.log(response);
  window.location.href = "login.html";
};

register.addEventListener("click", saveUser);
