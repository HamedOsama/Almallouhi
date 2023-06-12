const OurMessage = require("../model/ourMessage");
const factory = require("./handlerFactory");

exports.getOurMessage = factory.getOne(OurMessage);