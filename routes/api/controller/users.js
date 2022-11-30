import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/", async (req, res) => {
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
     username:req.body.username,
     email:req.body.email,
     passwords:req.body.passwords
    });

    await newUser.save();
    res.send({ status: "Success" });
  } catch (err) {
    console.log("Error saving new User:" + err);
    res.send({ status: "Fail", error: err });
  }
});

export default router;
