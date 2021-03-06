'use strict';

angular.module('webapps3Project2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('user-info', {
        url: '/user-info',
        templateUrl: 'app/account/userInfo/userInfo.html',
        controller: 'UserInfoController',
        authenticate: true
      })
      .state('add-whisky', {
        url: '/add-whisky',
        templateUrl: 'app/account/crud-whisky/add-whisky.html',
        controller: 'UserInfoController',
        authenticate: true
      })
      .state('edit-whisky', {
        url: '/edit-whisky/:id',
        templateUrl: 'app/account/crud-whisky/edit-whisky.html',
        controller: 'UserInfoController',
        authenticate: true
      });
  });
