const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const { listingschema,reviewschema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");


module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        // redirect url where user was before login
        req.session.redirectUrl=  req.originalUrl;
       
        req.flash("error","you must be logged in to create listing!");
       return res.redirect("/login");
    }
    next();
}

// passport deletes our session so we save our redirect url to locals
module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
        
    }
    next();
}

module.exports.isOwner = async(req,res,next)=>{
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if( res.locals.currUser && !listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "you are not owner of this Listing");
       return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validatelisting = (req,res,next)=>{
    let {error} = listingschema.validate(req.body);
    if(error){
        let errormsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errormsg);
    }
    else{
        next();
    }
};

module.exports.validatereview = (req,res,next)=>{
    let {error} = reviewschema.validate(req.body);
    if(error){
        let errormsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errormsg);
    }
    else{
        next();
    }
};

module.exports.isReviewAuthor = async(req,res,next)=>{
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    console.log(review);
    if( !review.author.equals(res.locals.currUser._id)){
        req.flash("error", "you are not created this review");
       return res.redirect(`/listings/${id}`);
    }
    next();
}