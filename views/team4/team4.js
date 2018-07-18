var team4 = angular.module('team4', ['ngRoute']);

team4.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/team4', {
    templateUrl: 'views/team4/team4.html',
    controller: 'team4controller'
  });
}]);

team4.controller('team4controller', function($scope) {
  $scope.title = "Team 4 Page";
  $scope.message = "Edit this page"
  $scope.firstNumber= 11;
  $scope.secondNumber= 92;
});
