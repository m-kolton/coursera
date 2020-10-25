(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuApp/templates/menuapp.template.html'
      })
    
      // Categories page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuApp/templates/main-categories.template.html',
        controller: 'CategoriesController as categoriesList',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      
      // Items page
      .state('items', {
        url: '/items/item/{categoryShortName}',
        templateUrl: 'src/menuApp/templates/main-items.template.html',
        controller: "ItemsController as items",
        resolve: {
          itemsList: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
    
    }
    
})();
    