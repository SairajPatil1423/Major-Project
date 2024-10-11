const Review = require("../models/review.js");
const Listing = require("../models/listing.js");


module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newreview = new Review(req.body.review);
    newreview.author = req.user._id;
    console.log(newreview);
    listing.reviews.push(newreview);


    await newreview.save();
    await listing.save();
    req.flash("sucess", "new review created");
    // console.log("new review saved");
    // res.send("new review saved");
    res.redirect(`/listings/${listing._id}`)
}

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("sucess", "review deleted");
    res.redirect(`/listings/${id}`);

}