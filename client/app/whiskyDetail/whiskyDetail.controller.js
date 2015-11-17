'use strict';

angular.module('webapps3Project2App')
  .controller('WhiskyDetailController', function ($scope, $http, $stateParams) {

    $http.get('/api/whiskys/' + $stateParams.id).success(function(whisky) {
      $scope.whisky = whisky;
      console.log($scope.whisky);
    });

    // $scope.addcomment = function(comment){
    //   if($scope.title === '') {
    //     return;
    //   }
    //
    //   $http.post('/api/whiskys/' + $stateParams.id, comment);
    //      $scope.whisky.comments.push(comment);
    //     //  console.log($scope.whisky);
    // }

    $scope.addcomment = function(comment){
      console.log($scope.comment);
      addComment($stateParams.id, comment);
      // .succes(function(comment){
        $scope.whisky.comments.push(comment);
      // });
    };

    function addComment(id, comment){
      return $http.post('/api/whiskys/' + id + '/comments', comment);
    };
  });
