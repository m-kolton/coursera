(function () {
    'use strict';
  
    angular.module('data')
    .controller('ItemsController', ItemsController);
  
    ItemsController.$inject = ['itemsList'];
    function ItemsController(itemsList) {
      var items = this;

      items.itemsList = itemsList.menu_items;
      
    }
  
  })();