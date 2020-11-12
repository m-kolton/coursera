(function() {
    'use strict';
  
    angular.module('public')
        .controller('SignUpController', SignUpController);
  
    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
      var ctrl = this;
  
      ctrl.formData = {};
      ctrl.favoriteDishInvalid = false;

      ctrl.signUp = function() {
        SignUpService.checkFavoriteDish(ctrl.formData.favoritedish)
          .then(function() {
            ctrl.formSubmitted = SignUpService.signUp(ctrl.formData);
            ctrl.favoriteDishInvalid = false;
          }, function(e) {
            ctrl.favoriteDishInvalid = true;
          });
      };

    }

  })();