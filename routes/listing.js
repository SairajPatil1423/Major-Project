const express = require("express");
const router = express.Router();
const wrapAsynce = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner,validatelisting}  = require("../middleware.js");
const controllerlisting = require("../controllers/listing.js");
const multer  = require('multer');
const {storage} = require("../cloudconfig.js");
const upload = multer({storage});



router.route("/")
.get( wrapAsynce(controllerlisting.index)) //Index Route
.post(isLoggedIn, upload.single('listing[image]'),validatelisting,wrapAsynce(controllerlisting.createlisting)); //Create Route



//New Route
router.get("/new",isLoggedIn,controllerlisting.rendernewform);

router.route("/:id")
.get(wrapAsynce(controllerlisting.showlisting))//Show Route
.put(isLoggedIn,isOwner, upload.single('listing[image]'),validatelisting, wrapAsynce(controllerlisting.updateform))//update route
.delete(isLoggedIn,isOwner, wrapAsynce(controllerlisting.destroylisting));//Delete Route



//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsynce(controllerlisting.rendereditform));

module.exports = router;