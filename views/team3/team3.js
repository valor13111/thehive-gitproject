var team3 = angular.module('team3', ['ngRoute']);

team3.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/team3', {
    templateUrl: 'views/team3/team3.html',
    controller: 'team3controller'
  });
}]);

team3.controller('team3controller', function($scope) {
  $scope.title = "Team 3 Page";
  $scope.message = "Edit this page"
  $scope.firstNumber= 53;
  $scope.secondNumber= 13;
});
