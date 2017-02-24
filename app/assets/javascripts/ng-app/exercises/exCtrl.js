function ExerciseController($scope, ExerciseService) {
  var ctrl = this;
  ctrl.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];

  ExerciseService
  .getAll()
  .then(function(results){
    ctrl.exercises = results.data;
  })
}
angular.module('app')
    .controller('exCtrl', ExerciseController);
