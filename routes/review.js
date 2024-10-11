const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validatereview, isLoggedIn, isReviewAuthor}  = require("../middleware.js");

const controllerReview = require("../controllers/review.js");

// post route
router.post("/",isLoggedIn,validatereview ,wrapAsync(controllerReview.createReview));

// delete reviews route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync( controllerReview.destroyReview));

module.exports = router;