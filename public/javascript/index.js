let isLoggedIn = false;
document.getElementById("results").innerHTML = "";
productPreview();
closeCustomerSignUp();
async function productPreview() {
  let response = await fetch("api/products");
  let responseJson = await response.json();
  //debug:
  // console.log("responseJson in productPreview(): "+responseJson)
  for (let i = 0; i < responseJson.length; i++) {
    let newProduct = responseJson[i];

    document.getElementById("results").innerHTML += newProduct;
  }
}

function checkpasswords() {
  let passwords = document.getElementById("passwords").value;
  let re_passwords = document.getElementById("re-passwords").value;
  let username = document.getElementById("username").value;

  if (passwords == re_passwords) {
    document.querySelector(".showfeedback").textContent = "Passwrods match!";
    document.getElementById("signup-btn").disabled = false; // activate sign up btn
    document.getElementById("login").style.display = "none"; // hide the login btn
    //show welcome message
    document.getElementById("welcome-msg").textContent =
      "Welcome, " + username + "!";
  } else {
    let inputFeedback = document.querySelector(".showfeedback");
    inputFeedback.textContent = "Passwords is not match";
  }
}

function hideLoginBtn() {}

let form = document.getElementById("user-form");
form.addEventListener("submit", postNewUser);
async function postNewUser(e) {
e.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let passwords = document.getElementById("passwords").value;
  let responseJson = await fetchJSON("api/users", {
    method: "POST",
    body: {
      username: username,
      email: email,
      passwords: passwords,
    },
  });
}
function closeCustomerSignUp() {
  let signupWindow = document.getElementById("customer-signup");

  window.onclick = function (event) {
    if (event.target == signupWindow) {
      signupWindow.style.display = "none";
    }
  };
}
