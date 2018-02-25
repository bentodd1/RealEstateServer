const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

var marketHealthSchema = new mongoose.Schema({
  RegionType: String,
  RegionName: String,
  City: String,
  State: String,
  Metro: String,
  CBSATitle: String,
  SizeRank: Number,
  MarketHealthIndex: Number,
  SellForGain: Number,
  PrevForeclosed: Number,
  ForeclosureRation: Number,
  ZHVI: Number,
  MoM: Number,
  YoY: Number,
  ForecastYoYPctChange: Number,
  StockOfREOS: Number,
  Delinquency: String,
  DaysOnMarket: Number

	
});

const MarketHealth = module.exports = mongoose.model('MarketHealth', marketHealthSchema);

module.exports.getMarketById = function(id, callback){
  MarketHealth.findById(id, callback);
}
module.exports.getMarketByState = function(state, callback){
  const query = {State: state};
  console.log(query);
  MarketHealth.find(query, callback);
}

module.exports.getAllMarkets = function(callback){
  MarketHealth.find({}, callback);
}

module.exports.addMarketHealth = function(newMarketHealth, callback){
  newMarketHealth.save(callback);
}

module.exports.getMarketByMetro = function(metro, callback){
  const query = {Metro: metro};
  console.log(query);
  var err;
  MarketHealth.find(query).sort({MarketHealthIndex: 1}).exec(err, callback);
}
