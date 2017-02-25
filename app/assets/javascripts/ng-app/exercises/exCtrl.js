function ExerciseController($scope, ExerciseService, exercise, exercises) {
  var ctrl = this;

  ctrl.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
  ctrl.exercises = exercises.data;
  ctrl.exercise = exercise.data;
}
angular.module('app')
    .controller('exCtrl', ExerciseController);
