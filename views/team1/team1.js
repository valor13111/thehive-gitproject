var team1 = angular.module('team1', ['ngRoute']);

team1.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/team1', {
    templateUrl: 'views/team1/team1.html',
    controller: 'team1controller'
  });
}]);

team1.controller('team1controller', function($scope) {
  $scope.title = "Team 1 Page";
  $scope.message = "Edit this page"
  $scope.firstNumber= 2;
  $scope.secondNumber= 3;
});
