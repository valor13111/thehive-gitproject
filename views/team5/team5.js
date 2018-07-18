var team5 = angular.module('team5', ['ngRoute']);

team5.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/team5', {
    templateUrl: 'views/team5/team5.html',
    controller: 'team5controller'
  });
}]);

team5.controller('team5controller', function($scope) {
  $scope.title = "Team 5 Page";
  $scope.message = "Edit this page"
  $scope.firstNumber= 33;
  $scope.secondNumber= 33;
});
