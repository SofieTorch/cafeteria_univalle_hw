var app = angular.module('app', ['ngRoute'])
    
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './pages/home/home.html',
            controller: 'homeController'
        })
        .when('/cafeteria', {
            templateUrl: './pages/cafeteria/home/cafeteria-home.html',
            controller: 'cafeteriaHomeController'
        })
})
