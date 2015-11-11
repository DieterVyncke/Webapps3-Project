'use strict';

angular.module('webapps3Project2App')
  .controller('OverviewController', function ($scope, $http) {
    $scope.whiskys = [];

    $http.get('/api/whiskys').success(function(whiskys) {
      $scope.whiskys = whiskys;
      console.log($scope.whiskys);
    });
  });
