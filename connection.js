const mongoose = require("mongoose");
async function connectToMongodb(url) {
  mongoose.connect(url);
}
module.exports = {connectToMongodb}
