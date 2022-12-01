
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Navbar from './Navbar.js';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <div id="general-info">
        <h1>
          <Link to="/">Meowy</Link>
        </h1>
        <input type="text" id="search-bar" />
        <Link to="/mechant"> Login As Mechant</Link>
        <Link to="/signup">
          <button
            id="login-signup">
            SignUp/LogIn
          </button>
        </Link>
        <div id="welcome-msg"></div>
        <a id="shopping-cart" href="#">
          your cart
        </a>
      </div>
      <Navbar />
    </header>
  );
}

// function SignupForm(){
//      closeWindow();
//      const formik = useFormik({
//        initialValues: {
//          username: "",
//          email: "",
//          passwords: ""
//        },
//        onSubmit: async (values) => {
//         //  formik.initialValues.username = formik.values.username;
//         //  formik.initialValues.email = formik.values.email;
//         //  formik.initialValues.passwords = formik.values.passwords;
//          alert(JSON.stringify(values, null, 2));
//          let response = await fetch("api/users/signup", {
//            method: "POST",
//            headers: { "Content-Type": "application/json" },
//            body: JSON.stringify(values),
//          });
//          let responseJson = await response.json();
//         document.getElementById("customer-signup").style.display = "none";
//         console.log("responseJson: "+responseJson)
//         document.getElementById("welcome-msg").innerHTML = responseJson.msg;
//        },
//      });

//     const checkpasswords = ()=>{
//         let passwords = document.getElementById("passwords").value;
//         console.log("passwords: "+passwords)
//         let re_passwords = document.getElementById("re-passwords").value;

//         if (passwords == re_passwords) {
//           document.querySelector(".showfeedback").textContent =
//             "Passwrods match!";
//           document.getElementById("signup-btn").disabled = false; // activate sign up btn
//           document.getElementById("login").style.display = "none"; // hide the login btn
//         } else {
//           let inputFeedback = document.querySelector(".showfeedback");
//           inputFeedback.textContent = "Passwords is not match";
//         }
//     }

//     return (
//       <div id="customer-signup">
//         <div className="signup-container">
//           <span
//             onClick={() =>
//               (document.getElementById("customer-signup").style.display =
//                 "none")
//             }
//           >
//             &times;
//           </span>
//           <form id="user-form" onSubmit={formik.handleSubmit}>
//             <h1>Welcome, please sign up</h1>
//             <label htmlFor="username">User Name</label>
//             <input
//               id="username"
//               name="username"
//               placeholder="username"
//               onChange={formik.handleChange}
//               value={formik.values.username}
//               required
//             />

//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               name="email"
//               placeholder="meowy@email.com"
//               type="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//               required
//             />

//             <label htmlFor="passwords">Passwords</label>
//             <input
//               id="passwords"
//               name="passwords"
//               placeholder="passwords"
//               type="password"
//               onChange={formik.handleChange}
//               value={formik.values.passwords}
//               required
//             />

//             <label htmlFor="passwords">Comfirm Passwords</label>
//             <input
//               id="re-passwords"
//               name="passwords"
//               placeholder="Re-enter passwords"
//               type="password"
//               onChange={checkpasswords}
//               required
//             />
//             <div className="showfeedback"></div>
//             <button id="signup-btn" type="submit" disabled>
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
// }



// function LogInForm(){

// }

// function closeWindow(){
//   let signupWindow = document.getElementById("signup-container");
//   window.onclick = function (event) {
//     if (event.target == signupWindow) {
//       signupWindow.style.display = "none";
//     }
//   };
// }
