'use strict';

angular.module('webapps3Project2App')
  .controller('WhiskyDetailController', function ($scope, $http, $stateParams) {
    console.log($stateParams.id);
    $http.get('/api/whiskys/' + $stateParams.id).success(function(whisky) {
      $scope.whisky = whisky;
      console.log($scope.whisky);
    });
  });
