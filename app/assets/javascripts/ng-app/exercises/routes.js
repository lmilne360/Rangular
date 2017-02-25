angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      /**
       * Routes and States
       */
       // Gets all exercises, goes to index
      $stateProvider
          .state('exercises', {
              url: '/',
              templateUrl: 'exercisesIndex.html',
              controller: 'exCtrl as ctrl',
              resolve: {
                exercises: function(ExerciseService){
                  return  ExerciseService.getAll();
                },
                exercise: function(){ return {}; }// dont need for index

              }
          })
          .state('exercises.new', {
              url: 'new',
              templateUrl: 'new.html',
              controller: 'exCtrl as ctrl',

          })


          // Gets one exercise and takes to show page
          .state('exercise', {
            url: '/exercise/{id}',
            templateUrl: 'exercisesShow.html',
            controller: 'exCtrl as ctrl',
            resolve: {
              exercises: function(){ return {}; }, //don't need for show page
              exercise: function ($stateParams, ExerciseService) {
                return ExerciseService.getExercise($stateParams.id);
              }
            }
          })

          .state('exercise.edit', {
              url: '/edit',
              templateUrl: 'exerciseEdit.html',
              controller: 'exCtrl as ctrl'
          })

          //
          .state('dashboard', {
          abstract: true,
          url: '/dashboard',
          templateUrl: 'layout.html'
      })
          // the default route when someone hits dashboard
          .state('dashboard.one', {
              url: '',
              templateUrl: 'tab1.html'
          })
          // this is /dashboard/two
          .state('dashboard.two', {
              url: '/two',
              templateUrl: 'tab2.html'
          })
          // this is /dashboard/three
          .state('dashboard.three', {
              url: '/three',
              templateUrl: 'tab3.html'
          });

      // default fall back route
      $urlRouterProvider.otherwise('/');

      // enable HTML5 Mode for SEO
      $locationProvider.html5Mode({ enabled: true, requireBase: false });
  });
