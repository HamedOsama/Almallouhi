const Images = require("../model/images");
const factory = require("./handlerFactory");

exports.getImages = factory.getAll(Images);