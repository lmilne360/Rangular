angular
    .module('app', [
        'ngAnimate',
        'ui.router',
        'templates'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        /**
         * Routes and States
         */
        $stateProvider
            .state('exercises', {
                url: '/',
                templateUrl: 'exercisesIndex.html',
                controller: 'exCtrl as ctrl'
            });

        // default fall back route
        $urlRouterProvider.otherwise('/');

        // enable HTML5 Mode for SEO
        $locationProvider.html5Mode({ enabled: true, requireBase: false });
    });
