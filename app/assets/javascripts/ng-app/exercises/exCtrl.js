function ExerciseController($scope) {
  var ctrl = this;
  ctrl.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
}
angular.module('app')
    .controller('exCtrl', ExerciseController);
