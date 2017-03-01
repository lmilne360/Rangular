function ExerciseController($scope, ExerciseService, exercise, exercises, $state, $filter) {
    var ctrl = this;

    ctrl.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
    ctrl.exercises = exercises.data;
    ctrl.exercise = exercise.data;

    ctrl.create = function() {
        ExerciseService.createExercise(ctrl.newExercise)
            .then(function(newExercise) {
                ctrl.exercises.push(newExercise.data);
                $state.reload();
            }).catch(function(error){
              console.log(error.message);
            });
    };

    ctrl.update = function() {
        ExerciseService.updateExercise(ctrl.exercise)
            .then(function(results) {
                ctrl.exercise = results.data;
            }).catch(function(error){
              console.log(error.message);
            });
        $state.go('exercise', ctrl.exercise.id);
    };

    ctrl.delete = function(id) {
        ExerciseService.deleteExercise(id)
        .then(function(){
            $state.reload();
        }).catch(function(error){
          console.log(error.message);
        });

    };

    ctrl.search = '';

    ctrl.refilter = function () {
      ctrl.filteredList = $filter('filter')(ctrl.exercises, ctrl.search);
    };

    ctrl.refilter();

}
angular.module('app')
    .controller('exCtrl', ExerciseController);
