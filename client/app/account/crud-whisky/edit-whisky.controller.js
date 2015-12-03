'use strict';

angular.module('webapps3Project2App')
  .controller('EditWhiskyCtrl', function ($scope, Auth, $http, $stateParams, $state) {

    var getCurrentUser = Auth.getCurrentUser;
    getWhiskyById($stateParams);


    //get whisky from db
    function getWhiskyById($stateParams){
      $http.get('/api/whiskys/' + $stateParams.id).success(function(whisky) {
        $scope.newWhisky = whisky;
        console.log(whisky);
      });
    }

    $scope.edit = function(whisky){
      $scope.$broadcast('show-errors-check-validity');
      if($scope.form.$valid){
        if(whisky.rating === null){
          whisky.rating = 0;
        }
        editWhisky(whisky, $state);
      }
    };

    $scope.cancel = function(){
      $state.transitionTo('user-info', $state.$current.params, {
        reload: true, inherit: true, notify: true
      });
    }

    function editWhisky(whisky, $state){
      //console.log(whisky);
      console.log(whisky._id);
      return $http.put('/api/whiskys/' + whisky._id, whisky)
      .then(function() {
        console.log("Successfully Created Supplier");
        // Force Reload on changing state
        $state.transitionTo('user-info', $state.$current.params, {
          reload: true, inherit: true, notify: true
        });
      });
    }
  });
