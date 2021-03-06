'use strict';

angular.module('main')
  .directive('st2Label', function () {

    var states = {
      'complete': {
        class: 'st2-label--success'
      },
      'error': {
        class: 'st2-label--danger'
      },
      'enabled': {
        class: 'st2-label--success'
      },
      'disabled': {
        class: 'st2-label--danger'
      },
      'succeeded': {
        class: 'st2-label--succeeded'
      },
      'failed': {
        class: 'st2-label--failed'
      },
      'running': {
        class: 'st2-label--progress'
      },
      'scheduled': {
        class: 'st2-label--progress'
      }
    };

    return {
      restrict: 'C',
      priority: 1,
      scope: {
        'status': '='
      },
      templateUrl: 'modules/st2-label/template.html',
      link: function postLink(scope, element) {
        scope.$watch('status', function (current, previous) {
          scope.state = states[scope.status] || {};

          element.removeClass(states[previous] && states[previous].class);
          element.addClass(states[current] && states[current].class);
        });
      }
    };

  });
