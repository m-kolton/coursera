(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var listToBuy = this;

        listToBuy.items = ShoppingListCheckOffService.getItemsToBuy();

        listToBuy.checkOff = function (itemIndex) {
            ShoppingListCheckOffService.addToListAlreadyBought(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var listAlreadyBought = this;

        listAlreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsAlreadyBought = [];

        var itemsToBuy = [
            {
                name: 'pinapples',
                quantity: 4
            },
            {
                name: 'apples',
                quantity: 6
            },
            {
                name: 'cookies',
                quantity: 4
            },
            {
                name: 'oranges',
                quantity: 4
            },
            {
                name: 'bananas',
                quantity: 2
            },
        ];

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsAlreadyBought = function () {
            return itemsAlreadyBought;
        };

        service.addToListAlreadyBought = function (itemIndex) {
            var item = itemsToBuy[itemIndex];

            itemsAlreadyBought.push(item);
            itemsToBuy.splice(itemIndex, 1);
        };
    }

})();