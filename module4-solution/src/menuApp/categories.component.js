(function () {
    'use strict';
    
    angular.module('data')
    .component('categories', {
      templateUrl: 'src/menuApp/templates/categories.template.html',
      bindings: {
        categories: '<'
      }
    });
    
})();
    