const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");


const controlleruser = require("../controllers/user.js");

router.route("/signup")
.get( controlleruser.rendersignupform)
.post( wrapAsync(controlleruser.signup));


router.route("/login")
.get( controlleruser.renderloginform)
.post( saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), controlleruser.login);



router.get("/logout",controlleruser.logout);
module.exports = router;