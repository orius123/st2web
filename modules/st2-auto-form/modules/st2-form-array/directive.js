'use strict';
angular.module('main')
  .directive('st2FormArray', function () {
    return {
      restrict: 'C',
      require: 'ngModel',
      scope: {
        'spec': '=',
        'options': '=',
        'ngModel': '=',
        'disabled': '='
      },
      templateUrl: 'modules/st2-auto-form/modules/st2-form-array/template.html',
      link: function (scope, element, attrs, ctrl) {
        scope.name = ctrl.$name;
      }
    };

  })

  ;
