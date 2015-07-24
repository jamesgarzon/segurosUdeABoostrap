var insuranceApp =angular.module('insuranceApp', ['ngRoute'])

insuranceApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'homeController as home',
      templateUrl:'views/home.html'
    })
    .when('/productos', {
      controller:'polizasController as polizas',
      templateUrl:'views/polizas.html'
    })
    .when('/poliza/:idPoliza', {
      controller:'detallePolizaController as detallePoliza',
      templateUrl:'views/detallePoliza.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})

insuranceApp.controller('homeController', function () {
});

insuranceApp.controller('homeController', function () {
});

//https://bootswatch.com/sandstone/