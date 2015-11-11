'use strict';

angular.module('webapps3Project2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('whiskyDetail', {
        url: '/whiskyDetail/:id',
        templateUrl: 'app/whiskyDetail/whiskyDetail.html',
        controller: 'WhiskyDetailController'
      });
  });
