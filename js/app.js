var app = angular.module("shoppingCartApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/shopping.html'
    })
    .when('/checkout', {
      templateUrl: '../templates/checkout.html'
    });
    // Potentially About and Contact
  $locationProvider.html5Mode(true);
});