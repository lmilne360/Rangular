function ExerciseController($scope, ExerciseService, exercise, exercises) {
  var ctrl = this;
  ctrl.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
  ctrl.exercises = exercises.data
  debugger

  /**ExerciseService
  .getAll()
  .then(function(results){
    ctrl.exercises = results.data;
  }) */
}
angular.module('app')
    .controller('exCtrl', ExerciseController);
