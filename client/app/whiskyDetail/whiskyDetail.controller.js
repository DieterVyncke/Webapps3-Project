'use strict';

angular.module('webapps3Project2App')
  .controller('WhiskyDetailController', function ($scope, $http, $stateParams) {

    $scope.errors = {};
    getWhiskyById($stateParams);

    $scope.addcomment = function(comment){
      $scope.submitted = true;
      if(comment.$valid){
        addComment($stateParams.id, comment)
        $scope.whisky.comments.push(comment);
        //console.log($scope.whisky);

        //reload getWhiskyById - calculate rating
        getWhiskyById($stateParams);

        //empty fields
        $scope.comment = '';
      }
    };

    //get whisky from db
    function getWhiskyById($stateParams){
      $http.get('/api/whiskys/' + $stateParams.id).success(function(whisky) {
        $scope.whisky = whisky;
        // $scope.whisky.rating = calculateRating($scope.whisky);
        console.log($scope.rating2);
      });
    }

    //add Comment and sent to db
    function addComment(id, comment){
      comment.whisky = id;
      return $http.post('/api/whiskys/' + id + '/comments', comment);
    };
  });
