'use strict';

angular.module('webapps3Project2App')
  .controller('AddWhiksyCtrl', function ($scope, Auth, $http) {

    var getCurrentUser = Auth.getCurrentUser;

    $scope.addWhiksy = function(whisky){
      $scope.$broadcast('show-errors-check-validity');
      if($scope.form.$valid){
        if(whisky.rating === null){
          whisky.rating = 0;
        }
        addWhisky(getCurrentUser(), whisky);
        //$scope.whisky.comments.push(comment);
        //reset(comment);

      }
    };

    function addWhisky(user, whisky){
      whisky.user = user;
      // comment.whisky = id;
      // comment.user = $scope.getCurrentUser();
      console.log(whisky);
      return $http.post('/api/whiskys/', whisky);
    }

  });
