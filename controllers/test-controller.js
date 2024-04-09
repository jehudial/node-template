const HttpError = require("../models/http-error")

module.exports.test = (req, res, next) => {
    console.log("yep");
    res.send("yep");
}

