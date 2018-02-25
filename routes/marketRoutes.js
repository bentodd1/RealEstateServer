const express = require('express');
const router = express.Router();
const MarketHealth = require('../models/marketHealth.js');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database.js');

router.route('/:id').get
((req,res,next)=>{
  const id = req.params.id;
  console.log('posted: ' + id);
  MarketHealth.getMarketById(id, (err, marketHealths)=>{
    if(err){
      res.json({
        marketHealths:[],
        success:false,
        message:'failed to get marketHealths'
      });
    }else{
      res.json({
        marketHealths:marketHealths,
        success:true,
        message:'got marketHealths'
      });
    }
  })

});

router.route('/state/:state').get
((req,res,next)=>{
  const state = req.params.state;
  console.log('posted: ' + state);
  MarketHealth.getMarketByState(state, (err, marketHealths)=>{
    if(err){
      res.json({
        marketHealths:[],
        success:false,
        message:'failed to get marketHealths'
      });
    }else{
      res.json({
        marketHealths:marketHealths,
        success:true,
        message:'got marketHealths'
      });
    }
  })
});

router.route('/')
.get((req,res,next)=>{
  MarketHealth.getAllMarkets((err, markets)=>{
    if(err){
      res.json({
        markets:[],
        success:false,
        message:'failed to get markets'
      });
    }else{
      res.json({
        markets:markets,
        success:true,
        message:'got markets'
      });
    }
  })
});

// ADD SKILL
router.route('/add')
.post((req,res,next)=>{
  let newMarketHealth = new MarketHealth({
    name:req.body.name
  });
  MarketHealth.addMarketHealth(newMarketHealth, (err, result)=>{
    if(err){
      res.json({
        success:false,
        message:'failed to add marketHealth'
      });
    }else{
      res.json({
        success:true,
        message:'market added',
        marketHealth:result
      });
    }
  });
});

router.route('/metro/:metro').get
((req,res,next)=>{
  const metro = req.params.metro;
  console.log('posted: ' + metro);
  MarketHealth.getMarketByMetro(metro, (err, marketHealths)=>{
    if(err){
      res.json({
        marketHealths:[],
        success:false,
        message:'failed to get marketHealths'
      });
    }else{
      res.json({
        marketHealths:marketHealths,
        success:true,
        message:'got marketHealths'
      });
    }
  })
});

module.exports = router;
