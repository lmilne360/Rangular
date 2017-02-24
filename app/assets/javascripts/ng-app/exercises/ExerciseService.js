function ExerciseService($http) {

    this.getAll = function() {
        return $http.get('/exercises');
    };
}
angular
  .module('app')
  .service('ExerciseService', ExerciseService);
