console.log("ok...its worekig");

const register = document.querySelector("#submit");
console.log(register);

const checkUser = async () => {
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

  let response = await fetch("http://localhost:8080/users/login", {
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
  if(response.status === 400){
    alert("User needs to register first");
    window.location.href = "register.html"
    return;
  }
  alert("You have logged in")
  window.location.href = "home.html";
};

register.addEventListener("click", checkUser);
