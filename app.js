var app = angular.module('app', [
  'ngRoute',
  'main',
  'team1',
  'team2',
  'team3',
  'team4',
  'team5'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);

app.controller('footerController', function($scope, $location) {
  $scope.goHome = function() {
    $location.url('/');
  }
})
