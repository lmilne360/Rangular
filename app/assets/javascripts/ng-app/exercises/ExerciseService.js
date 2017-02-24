function ExerciseService($http) {

    this.getAll = function() {
        return $http.get('/exercises');
    };

    this.getExercise = function(id){
      return $http.get(`/exercises/${id}`);
    };

    this.createExercise = function(exerciseData){
      return $http.post('/exercises', {exerciseData})
    };

    this.updateExercise = function(exerciseData) {
      return $http.patch(`/exercises/${exerciseData.id}`,{exerciseData});
    };

    this.deleteExercise = function(id) {
      return  $http.delete(`/exercises/${id}`);
    };
    
}
angular
  .module('app')
  .service('ExerciseService', ExerciseService);
