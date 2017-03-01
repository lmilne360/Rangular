function ProgressBar() {
  return{
    resttrict: 'EA',
    scope:{
      currentValue: '=',
      desiredValue: '='
    },
    template: `
            <div class='progress-bar'>
              <div class='progress-bar-bar'>Goal Progress: {{currentValue / desiredValue * 100}}%</div>
              </div> `,
    link: function($scope, element, attrs){

      function updateProgress() {
        var progress = 0;
        if ($scope.desiredValue) {
          progress = ($scope.currentValue/ $scope.desiredValue) * 100;
        }
        //set width of the bar based in percecnt
        document.querySelectorAll(".progress-bar-bar")[0].setAttribute( 'style', 'width:' + progress + '%' );
        //element.find('.progress-bar-bar').css('width', progress);
        //debugger
      }
      $scope.$watch('currentValue', updateProgress);
      $scope.$watch('desiredValue', updateProgress);
    }
  };
}

angular
  .module('app')
  .directive('progressBar', ProgressBar);
