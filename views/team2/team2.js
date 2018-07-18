var team2 = angular.module('team2', ['ngRoute']);

team2.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/team2', {
    templateUrl: 'views/team2/team2.html',
    controller: 'team2controller'
  });
}]);

team2.controller('team2controller', function($scope) {
  $scope.title = "Team 2 Page";
  $scope.message = "Edit this page"
  $scope.firstNumber= 4;
  $scope.secondNumber= 1;
});
