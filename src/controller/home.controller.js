const factory = require('./handlerFactory');
const Home = require('../model/home');


exports.getHome = factory.getOne(Home);
