'use strict';

angular.module('webapps3Project2App')
  .directive('directiveFooter', function () {

    return {
      restrict: 'E',
      templateUrl: '/components/footer/footer.html',
      replace: true
    };
  });
