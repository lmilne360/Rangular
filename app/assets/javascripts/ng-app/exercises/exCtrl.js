function ExerciseController($scope, ExerciseService, exercise, exercises) {
    var ctrl = this;
    
    ctrl.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
    ctrl.exercises = exercises.data;
    ctrl.exercise = exercise.data;

    ctrl.create = function() {
        ExerciseService.createExercise(ctrl.newExercise)
            .then(function() {
                $state.go('exercises');
            });
    };
}
angular.module('app')
    .controller('exCtrl', ExerciseController);
