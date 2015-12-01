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
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
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
        controller: 'AddWhiksyCtrl',
        authenticate: true
      });
  });
