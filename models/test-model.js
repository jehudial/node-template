const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const testSchema = new Schema({
name: {type: String},
email: {type: String, required: true, unique: true}
 });

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Test", testSchema);