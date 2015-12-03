/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var fs = require('fs');

var User = require('../api/user/user.model');
var Whisky = require('../api/whisky/whisky.model');

var testUser = new User({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  });

var admin = new User({
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  });

var whisky1 = new Whisky({
  name: 'Ardbeg Ten',
  color: 'Gold',
  taste: 'Precise balance, big smoke and non-chill filtered. This is why this is such a famous dram.',
  nose: 'A ridge of vanilla leads to mountain of peat capped with citrus fruits and circled by clouds of sea spray.',
  region: 'Islay',
  image: 'assets/images/ardbeg.jpg',
  percentage: '40',
  description: 'Jim Murrays 2008 World Whisky of the Year! When Ardbeg 10 was released it was the first expression from the distillery not to be chill-filtered. Its a true classic from Islay, and a must have for any fan of single malt whisky.',
  years: '10',
  targetprice: 45.50,
  rare: false,
  user: testUser,
}).save(function(){});


Whisky.find({}).remove(function() {
  Whisky.create(
    {
    name: 'The Macallan 12 Year Old Sherry Oak',
    color: 'Gold',
    taste: 'Precise balance, big smoke and non-chill filtered. This is why this is such a famous dram.',
    nose: 'A ridge of vanilla leads to mountain of peat capped with citrus fruits and circled by clouds of sea spray.',
    region: 'Islay',
    image: 'assets/images/macallan.jpg',
    percentage: '40',
    description: 'Jim Murrays 2008 World Whisky of the Year! When Ardbeg 10 was released it was the first expression from the distillery not to be chill-filtered. Its a true classic from Islay, and a must have for any fan of single malt whisky.',
    years: '10',
    targetprice: 45.50,
    rare: false,
    releasedate: "2015-09-20",
    user: admin
  },
  {
    name: 'Balvenie 21 Year Old PortWood Finish',
    color: 'Gold',
    taste: 'Precise balance, big smoke and non-chill filtered. This is why this is such a famous dram.',
    nose: 'A ridge of vanilla leads to mountain of peat capped with citrus fruits and circled by clouds of sea spray.',
    region: 'Islay',
    image: 'assets/images/balvenie-21y.jpg',
    percentage: '40',
    description: 'Jim Murrays 2008 World Whisky of the Year! When Ardbeg 10 was released it was the first expression from the distillery not to be chill-filtered. Its a true classic from Islay, and a must have for any fan of single malt whisky.',
    years: '10',
    targetprice: 45.50,
    rare: false,
    releasedate: "2014-09-25",
  },
  {
    name: 'Oban 14 Year Old',
    color: 'Gold',
    taste: 'Precise balance, big smoke and non-chill filtered. This is why this is such a famous dram.',
    nose: 'A ridge of vanilla leads to mountain of peat capped with citrus fruits and circled by clouds of sea spray.',
    region: 'Islay',
    image: 'assets/images/balvenie-21y.jpg',
    percentage: '40',
    description: 'Jim Murrays 2008 World Whisky of the Year! When Ardbeg 10 was released it was the first expression from the distillery not to be chill-filtered. Its a true classic from Islay, and a must have for any fan of single malt whisky.',
    years: '10',
    targetprice: 45.50,
    rare: false,
    releasedate: "2012-01-25",
  },
  {
    name: 'Balvenie 21 Year Old PortWood Finish',
    color: 'Gold',
    taste: 'Precise balance, big smoke and non-chill filtered. This is why this is such a famous dram.',
    nose: 'A ridge of vanilla leads to mountain of peat capped with citrus fruits and circled by clouds of sea spray.',
    region: 'Islay',
    image: 'assets/images/macallan.jpg',
    percentage: '40',
    description: 'Jim Murrays 2008 World Whisky of the Year! When Ardbeg 10 was released it was the first expression from the distillery not to be chill-filtered. Its a true classic from Islay, and a must have for any fan of single malt whisky.',
    years: '10',
    targetprice: 45.50,
    rare: false,
    releasedate: "2014-09-25",
  },
  {
    name: 'BenRiach 16 Year Old',
    color: 'Gold',
    taste: 'Precise balance, big smoke and non-chill filtered. This is why this is such a famous dram.',
    nose: 'A ridge of vanilla leads to mountain of peat capped with citrus fruits and circled by clouds of sea spray.',
    region: 'Islay',
    image: 'assets/images/macallan.jpg',
    percentage: '40',
    description: 'Jim Murrays 2008 World Whisky of the Year! When Ardbeg 10 was released it was the first expression from the distillery not to be chill-filtered. Its a true classic from Islay, and a must have for any fan of single malt whisky.',
    years: '10',
    targetprice: 45.50,
    rare: false,
    releasedate: "2011-10-25",
  });
});


User.find({}).remove(function() {
  User.create(
    testUser,
    admin
  )
});


// User.find({},function(err, user){
  // console.log(user);
  // user.whikies.push(whiksy1);
// });
// .populate(whisky1).exec(function(err, user){
//
// });

// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     name: 'Test User',
//     email: 'test@test.com',
//     password: 'test'
//   }, {
//     provider: 'local',
//     role: 'admin',
//     name: 'Admin',
//     email: 'admin@admin.com',
//     password: 'admin'
//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });
