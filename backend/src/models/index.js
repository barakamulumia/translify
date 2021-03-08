const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.order = require("./order.model");
db.driver = require("./driver.model");
db.photo = require("./photos.model");

db.ROLES = ["client", "driver", "admin"];

module.exports = db;
