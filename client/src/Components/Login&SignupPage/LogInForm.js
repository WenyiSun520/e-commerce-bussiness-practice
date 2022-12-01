import React, { useState, useEffect} from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function LogInForm() {
  const [errorMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  closeWindow();
  const formik = useFormik({
    initialValues: {
      email: "",
      passwords: "",
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      let response = await fetch("api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      let responseJson = await response.json();
      //debug:
      console.log("responseJson: " + responseJson.status+" responseJson.msg: "+responseJson.msg );
      if (responseJson.status == "Fail") {
        setErrMsg(responseJson.msg);
      } else {
        document.getElementById("login-signup").style.display ="none"; // hide the login/signup btn
        document.getElementById("welcome-msg").innerHTML = responseJson.msg;
        navigate('/')
      }
    },
  });
  return (
    <div id="customer-login" style={{ display: "none" }}>
      <form className="user-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="meowy@email.com"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />

        <label htmlFor="passwords">Passwords</label>
        <input
          id="passwords"
          name="passwords"
          placeholder="passwords"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passwords}
          required
        />
        <div className="showfeedback"></div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
        <div className="feedback">{errorMsg}</div>
      </form>
    </div>
  );
}

function closeWindow() {
  let signupWindow = document.getElementById("customer-login");
  window.onclick = function (event) {
    if (event.target == signupWindow) {
      signupWindow.style.display = "none";
    }
  };
}
