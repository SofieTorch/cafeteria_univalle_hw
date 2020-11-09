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
        .when('/iniciar-sesion', {
            templateUrl: './pages/cafeteria/log-in/log-in.html'
        })
        .when('/registro', {
            templateUrl: './pages/cafeteria/sign-up/sign-up.html'
        })
        .when('/cafeteria/reservas', {
            templateUrl: './pages/cafeteria/reservas/reservas.html'
        })
        .when('/cafeteria/inicio-sesion', {
            templateUrl: './pages/cafeteria/log-in02/inicioSesion.html'
        })
        .when('/cafeteria/pendientes', {
            templateUrl: './pages/cafeteria/pendientes/pendientes.html'
        })
})
