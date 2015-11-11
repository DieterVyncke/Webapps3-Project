'use strict';

angular.module('webapps3Project2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('overview', {
        url: '/overview',
        templateUrl: 'app/overview/overview.html',
        controller: 'OverviewController'
      });
  });
