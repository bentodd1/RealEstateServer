const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config/database');

module.exports = function(passport){
  let options = {};
  options.jwtFromRequest = extractJwt.fromAuthHeaderWithScheme("jwt");
  options.secretOrKey = config.secret;

}
