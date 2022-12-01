let isLoggedIn = false;
closeCustomerSignUp();
function checkpasswords() {
  let passwords = document.getElementById("passwords").value;
  let re_passwords = document.getElementById("re-passwords").value;
  let username = document.getElementById("username").value;

  if (passwords == re_passwords) {
    document.querySelector(".showfeedback").textContent = "Passwrods match!";
    document.getElementById("signup-btn").disabled = false; // activate sign up btn
    document.getElementById("login").style.display = "none"; // hide the login btn
  } else {
    let inputFeedback = document.querySelector(".showfeedback");
    inputFeedback.textContent = "Passwords is not match";
  }
}

let form = document.getElementById("user-form");
form.addEventListener("submit", postNewUser);
async function postNewUser(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let passwords = document.getElementById("passwords").value;
  let responseJson = await fetchJSON("api/users/signup", {
    method: "POST",
    body: {
      username: username,
      email: email,
      passwords: passwords,
    },
  });

  //show welcome message
  document.getElementById("welcome-msg").innerHTML = responseJson.msg
}
function closeCustomerSignUp() {
  let signupWindow = document.getElementById("customer-signup");

  window.onclick = function (event) {
    if (event.target == signupWindow) {
      signupWindow.style.display = "none";
    }
  };
}

  async function logOut() {
    await fetch("api/users/logout");
    window.location.reload();
  }
