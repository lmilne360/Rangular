angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('exercises', {
                templateUrl: 'angular/templates/exercises.html',
                controller: 'UserController'
            });
    });
