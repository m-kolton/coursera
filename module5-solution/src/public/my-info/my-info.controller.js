(function() {
    'use strict';
  
    angular.module('public')
        .controller('MyInfoController', MyInfoController);
  
    MyInfoController.$inject = ['SignUpService', 'ApiPath'];
    function MyInfoController(SignUpService, ApiPath) {
        var ctrl = this;
        ctrl.basePath = ApiPath;

        ctrl.getSignUpData = function() {
          var signUpData = SignUpService.getSignUpData();
            return signUpData;
        };

        ctrl.signUpData = ctrl.getSignUpData();
    }
  })();