const AboutUs = require("../model/aboutUs");
const factory = require("./handlerFactory");

exports.getAboutUs = factory.getOne(AboutUs);