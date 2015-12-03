'use strict';

angular.module('webapps3Project2App')
  .controller('UserInfoController', function ($scope, Auth, $http, $state, $timeout) {

    //check for login
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.userWhiskys =  $scope.getCurrentUser().whiskies;
    $scope.showAdd = true;

    $scope.deleteWhisky = function(whisky){
      return $http.delete('/api/whiskys/' + whisky._id , whisky).then(function(){
        $scope.getCurrentUser().whiskies.splice(whisky, 1);
      });
    }

    $scope.add = function(whisky){
      $scope.$broadcast('show-errors-check-validity');
      // if($scope.form.$valid){
        console.log($scope.getCurrentUser());
        addWhisky($scope.getCurrentUser(), whisky);
      // }
    };

    function addWhisky(user, whisky){
      whisky.user = user;
      return $http.post('/api/whiskys/', whisky)
      .then(function() {
        console.log("Successfully Created Supplier");
      }).then(function(){
        // reload the page
        window.location.href = $state.href('user-info');
        window.location.reload();
      });
    }

    $scope.editWhisky = function(whisky){
        $scope.showAdd = false;
        $http.get('/api/whiskys/' + whisky._id).success(function(whisky) {
          $scope.newWhisky = whisky;
      });
    };

    $scope.editSubmit = function(whisky){
      $scope.$broadcast('show-errors-check-validity');
      // if($scope.form.$valid){
        edit(whisky);
      // }
    };

    function edit(whisky){
      console.log(whisky._id);
      return $http.put('/api/whiskys/' + whisky._id, whisky)
      .then(function() {
        console.log("Successfully updated Supplier");
        // reload the page
        window.location.href = $state.href('user-info');
        window.location.reload();
      });
    }





    // $scope.errors = {};
    //
    // $scope.changePassword = function(form) {
    //   $scope.submitted = true;
    //   if(form.$valid) {
    //     Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
    //     .then( function() {
    //       $scope.message = 'Password successfully changed.';
    //     })
    //     .catch( function() {
    //       form.password.$setValidity('mongoose', false);
    //       $scope.errors.other = 'Incorrect password';
    //       $scope.message = '';
    //     });
    //   }
		// };
  });
