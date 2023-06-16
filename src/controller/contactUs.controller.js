const ContactUs = require("../model/contactUs");
const factory = require("./handlerFactory");

exports.addContactUs = factory.createOne(ContactUs);