'use strict';

angular.module('webapps3Project2App')
  .controller('WhiskyDetailController', function ($scope, $http, $stateParams, Auth) {

    //check for login
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

    getWhiskyById($stateParams);

    $scope.addcomment = function(comment){
      $scope.$broadcast('show-errors-check-validity');
      if($scope.form.$valid){
        if(comment.rating === undefined){
          comment.rating = 0;
        }
        addComment($stateParams.id, comment);
        $scope.whisky.comments.push(comment);
        reset();

        //reload getWhiskyById - calculate rating
        getWhiskyById($stateParams);
      }
    };

    function reset() {
      $scope.$broadcast('show-errors-reset');
      $scope.comment = '';
    }

    //get whisky from db
    function getWhiskyById($stateParams){
      $http.get('/api/whiskys/' + $stateParams.id).success(function(whisky) {
        $scope.whisky = whisky;
        $scope.whisky.rating = whisky.rating;
      });
    }

    //add Comment and sent to db
    function addComment(id, comment){
      comment.whisky = id;
      comment.user = $scope.getCurrentUser();
      return $http.post('/api/whiskys/' + id + '/comments', comment);
    }
  });
