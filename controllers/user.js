
const User = require("../models/user.js");

module.exports.rendersignupform =(req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signup =
async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newuser = new User({ email, username });
        const registeruser = await User.register(newuser, password);
        console.log(registeruser);
        req.login(registeruser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("sucess", "Welcome To WanderLust");
            res.redirect("/listings");
        });

    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

}

module.exports.renderloginform = (req, res) => {
    res.render("users/login.ejs")
}

module.exports.login = async (req, res) => {
    req.flash("sucess", "welcome back to Wanderlust!!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout =  (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return nextTick(err);
        }
        req.flash("sucess", "you are logged out now");
        res.redirect("/listings");
    })
}