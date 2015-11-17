/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var fs = require('fs');

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Whisky = require('../api/whisky/whisky.model');
// var Comment = require('../api/comment/comment.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

var ardbegImg = 'server/assets/images/ardbeg.jpg';
var macallanImg = 'server/assets/images/macallan.jpg';
var obanImg = 'server/assets/images/oban.jpg';


//creating whisky
// var whisky = new Whisky({
//   name: 'Ardbeg Ten',
//   color: 'Gold',
//   rating: 3.0,
//   // tags: ['Islay', 'Peak'],
//   taste: 'Precise balance, big smoke and non-chill filtered. This is why this is such a famous dram.',
//   nose: 'A ridge of vanilla leads to mountain of peat capped with citrus fruits and circled by clouds of sea spray.',
//   region: 'Islay',
//   image: 'assets/images/ardbeg.jpg',
//   percentage: '40',
//   description: 'Jim Murrays 2008 World Whisky of the Year! When Ardbeg 10 was released it was the first expression from the distillery not to be chill-filtered. Its a true classic from Islay, and a must have for any fan of single malt whisky.',
//   years: '10',
//   targetprice: 45.50,
//   rare: false,
//   // fk_comments: [{
//   //   title: "test",
//   //   body: "dit is maar een testcomment",
//   //   rating: 4.2
//   // }]
// });
//
// whisky.save(function(err){
//   if(err) return console.console.error(err);
// })
//
// Whisky.find({}).remove(function() {
//   Whisky.findOne({name: "Ardbeg Ten"}).exec(function(err, whisky){
//     if(err)
//     whisky.fk_comments.push({
//       title: "test",
//       body: "dit is maar een testcomment",
//       rating: 4.2
//     });
//     whisky.save();
//   })
// });





Whisky.find({}).remove(function() {
  Whisky.create({
    name: 'Ardbeg Ten',
    color: 'Gold',
    rating: 3.0,
    taste: 'Precise balance, big smoke and non-chill filtered. This is why this is such a famous dram.',
    nose: 'A ridge of vanilla leads to mountain of peat capped with citrus fruits and circled by clouds of sea spray.',
    region: 'Islay',
    image: 'assets/images/ardbeg.jpg',
    percentage: '40',
    description: 'Jim Murrays 2008 World Whisky of the Year! When Ardbeg 10 was released it was the first expression from the distillery not to be chill-filtered. Its a true classic from Islay, and a must have for any fan of single malt whisky.',
    years: '10',
    targetprice: 45.50,
    rare: false,
    // fk_comments: [{
    //   title: "test",
    //   body: "dit is maar een testcomment",
    //   rating: 4.2,
    // }]
  });
});



// exports.seedComments = function seedComments(){
//   Comment.find({}).exec(function(err, collection){
//   if (collection.length === 0) {
//             Comment.create(
//               {
//                 title: 'Comment One',
//                 body: 'gewoon wat commentaar',
//                 rating: 3.0,
//               });
//             Comment.create({
//               title: 'Comment Two',
//               body: 'gewoon wat commentaar',
//               rating: 3.0,
//             });
//     }
//   })
// }
