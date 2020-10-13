(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.dishes = "";
        $scope.message = "";
        $scope.amountOfDishes = 0;

        $scope.checkLunch = function() {
            var splittedString = splitString($scope.dishes);
            $scope.amountOfDishes = countDishes(splittedString);

            if($scope.amountOfDishes === 0) {
                $scope.message = "Please enter data first";
            } else if($scope.amountOfDishes > 0 && $scope.amountOfDishes <= 3) {
                $scope.message = "Enjoy!";
            } else if($scope.amountOfDishes >3) {
                $scope.message = "Too much!";
            }
        };

        function splitString(string) {
            var splittedString = string.split(",");
            return splittedString;
        }

        function countDishes(dishes) {
            var count = 0;
            for(var i=0; i<dishes.length; i++) {
                if(dishes[i].length>0) {
                    count++;
                }
            }
            return count;
        }

        
    }

})();