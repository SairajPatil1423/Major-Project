if(process.env.NODE_ENV != "production")
{
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const dbURL = process.env.ATLASDB_URL;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");



const listingsRouter =require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


const store = MongoStore.create({
    mongoUrl:dbURL,
    crypto:{
        secret:process.env.SECRET
    },
    touchAfter: 24*3600
});

store.on("error",()=>{
    console.log("ERROR IN MONGO STORE",err);
})
const sessionoptions =
{
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires:Date.now() +7*2460*60*1000,
        maxAge:7*2460*60*1000,
        httpOnly:true,
    }
}

main().then(() => {
    console.log("connected to DB");
})
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbURL);
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));



app.use(session(sessionoptions));
app.use(flash());
// authentication using passport 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.sucess = req.flash("sucess");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});




// listings
app.use("/listings",listingsRouter);

app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);

// creating expresserror for page not found
app.all("*", (req, res, next) => {
    const err = new ExpressError(404, "Page Not Found!");
    next(err);
});

app.use((err, req, res, next) => {
    const { statusCode = 500, message } = err;
    if (!err.message) err.message = "Oh No, Something Went Wrong!";
    // res.status(statusCode).send(err.message);
    res.status(statusCode).render("error.ejs", { err });
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});