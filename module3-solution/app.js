(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '<foundList',
                onRemove: '&'
            }
        }
        return ddo;
    }

    // NarrowItDownController.$inject['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var resultList = this;

        resultList.searchTerm = "";
        resultList.found = [];

        resultList.search = function () {
            var promise = MenuSearchService.getMatchedMenuItems(resultList.searchTerm);

            promise.then(function (response) {
                resultList.found = response;
            })
            .catch(function (error) {
                console.log("Something went terribly wrong.");
            });
        };

        resultList.test = function () {
            console.log("Dupa");
        };

        resultList.removeItem = function (itemIndex) {
            resultList.found.splice(itemIndex, 1);
        };

    }

    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
              })
              .then(function (result) {
                // process result and only keep items that match
                var foundItems = [];

                if(searchTerm) {
                    for(var i=0; i<result.data.menu_items.length; i++) {
                        if(result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
                            foundItems.push(result.data.menu_items[i]);
                        }
                    } 
                }

                // return processed items
                return foundItems;
            });
        };

        
    }
    



})();