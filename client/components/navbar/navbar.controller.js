'use strict';

angular.module('webapps3Project2App')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      {
      'title': 'Home',
      'link': '/'
      },
      {
      'title': 'Whiskies',
      'link': '/overview'
      },
    ];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
