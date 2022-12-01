import express from "express";
var router = express.Router();

// router.get("/myIdentity", (req, res, next) => {
//   if (req.session.isAuthenticated) {
//     res.json({
//       status: "loggedin",
//       userInfo: {
//         name: req.session.account.name,
//         username: req.session.account.username,
//       },
//     });
//   } else {
//     res.json({ status: "loggedout" });
//     return;
//   }
// });
router.get("/userSessionInfo", (req, res) => {
  try {
    const sess = req.session;
    if (sess.username && sess.password) {
      if (sess.username) {
        res.json(`
        <h1>Welcome ${sess.username} </h1><br>
        <h3>This is the Home page</h3>
        <button id="logout" onclick="logOut()">Click here to log out</button>
        `);
      }
    } else {
      res.sendFile(__dirname + "/public/index.html");
    }
  } catch (err) {
    console.log("error when getting user session info: " + err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    //debug:
    console.log(
      "username: " +
        req.body.username +
        "email: " +
        req.body.email +
        "passwords: " +
        req.body.passwords
    );

    let newUser = new req.models.Users({
      username: req.body.username,
      email: req.body.email,
      passwords: req.body.passwords,
    });

    await newUser.save();
      let msg = `
        <p>Welcome ${req.body.username} </p><br>
        <button id="logout" onclick="logOut()">Click here to log out</button>
        `;
      res.send({ status: "Success", msg: msg });
  } catch (err) {
    console.log("Error saving new User:" + err);
    res.send({ status: "Fail", error: err });
  }
});

router.post("/login", async (req, res) => {
  try {
    let sess = req.session;
    let { email, password } = req.body;
    let foundUser = await req.models.Users.findOne({ email: email });
    if (foundUser == null) {
      res.json({ status: "Fail", error: "we can't find your account!" });
    } else {
      if (foundUser.passwords != password) {
        res.json({
          status: "Fail",
          error: "Wrong passwords, please try again!",
        });
      } else {
        sess.email = email;
        sess.password = password;
        // add username and password validation logic here if you want.If user is authenticated send the response as success
       let msg = `
        <h1>Welcome ${foundUser.username} </h1><br>
        <h3>This is the Home page</h3>
        <button id="logout" onclick="logOut()">Click here to log out</button>
        `
        res.send({status:"success", msg:msg});
      }
    }
  } catch (err) {
    console.log("error when logging user in: " + err);
     res.status(500).json({ status: "error", error: error });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    res.redirect("index.html");
  });
});

export default router;
