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

Whisky.find({}).remove(function() {
  Whisky.create(
    {
      name: 'Ardbeg Ten',
      color: 'Pale straw',
      taste: 'Precise balance, big smoke and non-chill filtered. This is why this is such a famous dram.',
      nose: 'A ridge of vanilla leads to mountain of peat capped with citrus fruits and circled by clouds of sea spray.',
      region: 'Islay',
      image: 'assets/images/ardbeg.jpg',
      percentage: '40',
      description: 'Jim Murrays 2008 World Whisky of the Year! When Ardbeg 10 was released it was the first expression from the distillery not to be chill-filtered. Its a true classic from Islay, and a must have for any fan of single malt whisky.',
      years: '10',
      targetprice: 57.89,
      rare: false,
    },
    {
    name: 'The Macallan 12 Year Old Sherry Oak',
    color: 'Gold',
    taste: 'Good length with a solid oaked note.',
    nose: 'Crisp and sweet. There are notes of sultanas and fresh apple blossom. There is a defined floral note with a beautiful Sherry, calvados emerges with a tropical fruit note and golden syrup.',
    region: 'Speyside',
    image: 'assets/images/macallan.jpg',
    percentage: '40',
    description: 'A sherry wood matured 12 year old from Macallan, a superbly balanced affair, one of the best of its age group. ',
    years: '12',
    targetprice: 88.25,
    rare: false,
    releasedate: "2015-09-20",
  },
  {
    name: 'Balvenie 21 Year Old PortWood Finish',
    color: 'Creamy',
    taste: 'Cocoa, slightly bitter as it tails away gracefully',
    nose: ' Elegant. White peach and a faint puff of smoke.',
    region: 'Speyside',
    image: 'assets/images/balvenie-21y.jpg',
    percentage: '40',
    description: 'The flagship single malt from Balvenies little group of Port Wood whiskies. This bottling was finished in thirty year old port pipes and is a veritable masterclass in poise and balance.',
    years: '21',
    targetprice: 187.70,
    rare: true,
    releasedate: "2014-09-25",
  },
  {
    name: 'Oban 14 Year Old',
    color: 'Gold',
    taste: 'The medicinal notes are quite evident with notes of the sea; seaweed, tarry ropes. There are notes of cut hay and wood smoke rising with a gentle estery sweetness. The palate is thick and full. Notes of citrus with smooth sweetness. The smoke wafts with notes of seaweed. The oak is quite rich with grist and cereal and malt. The finish is of good length with fruit and dry oak.',
    nose: 'The nose is rich and smokey.',
    region: ' 	Western Highlands',
    image: 'assets/images/oban.jpg',
    percentage: '43',
    description: 'A bustling seaside resort has grown up around the distillery in the two centuries since it was first built in the fishing town of Oban. The West Highland malt is still produced in the same unhurried, traditional fashion and this 14 year old is a classic dram from the distillery. ',
    years: '14',
    targetprice: 63.40,
    rare: false,
    releasedate: "2012-01-25",
  },
  {
    name: 'BenRiach 16 Year Old',
    color: 'Gold',
    taste: 'Medium length, some caramel, dark sugar and a pinch of peat.',
    nose: 'Fruity-fresh. Honeyed sweetness, touch of dryness.',
    region: 'Speyside',
    image: 'assets/images/benriach-16y.jpg',
    percentage: '40',
    description: 'Named Best Speyside Single Malt at the 2015 World Whiskies Awards, this 16 year old BenRiach was also a Gold Medal winner at the 2006 International Wine and Spirits Competition.',
    years: '16',
    targetprice: 59.03,
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
