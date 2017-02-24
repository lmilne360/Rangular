function ExerciseController() {
  var ctrl = this;

  ctrl.add = add;

  ctrl.exercises = [
    {name: "Bench Press"},
    {name: "Squats"}
  ]

//Adds an exercise
  function add() {
    ctrl.exercises.push(ctrl.newExercise);
    ctrl.newExercise = {};
  }


}



angular
  .module('app')
  .controller('exController', ExerciseController);
