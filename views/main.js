var main = angular.module('main', ['ngRoute']);

main.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'mainController'
  });
}]);

main.controller('mainController', function($scope, $location) {
  $scope.title = "Welcome to this Git Tutorial";
  $scope.message = "Select your teams page";

  $scope.goTeam1 = function() {
    $location.url('/team1');
  }

  $scope.goTeam2 = function() {
    $location.url('/team2');
  }

  $scope.goTeam3 = function() {
    $location.url('/team3');
  }

  $scope.goTeam4 = function() {
    $location.url('/team4');
  }

  $scope.goTeam5 = function() {
    $location.url('/team5');
  }
});
