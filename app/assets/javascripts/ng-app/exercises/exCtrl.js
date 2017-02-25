function ExerciseController($scope, ExerciseService, exercise, exercises, $state) {
    var ctrl = this;

    ctrl.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
    ctrl.exercises = exercises.data;
    ctrl.exercise = exercise.data;

    ctrl.create = function() {
        ExerciseService.createExercise(ctrl.newExercise)
            .then(function(newExercise) {
               ctrl.exercises.push(newExercise.data);
                $state.go('exercises');
            });
    };
}
angular.module('app')
    .controller('exCtrl', ExerciseController);
