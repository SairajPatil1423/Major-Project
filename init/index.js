const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
main().then((res) => {
  console.log("connected to DB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({ ...obj, owner: "66f78613cfbe60d3fdb1ccc8" }));
  await Listing.insertMany(initdata.data);
  console.log("data was initialised");
}
initDB();