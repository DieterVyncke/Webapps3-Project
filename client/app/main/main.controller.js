'use strict';

angular.module('webapps3Project2App')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.whiskys = [];

    $http.get('/api/whiskys').success(function(whiskys) {
      $scope.whiskys = whiskys;
      console.log($scope.whiskys);
    });





    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };
    //
    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };
  });
