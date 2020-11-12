(function() {
    'use strict';
  
    angular.module('public')
        .service('SignUpService', SignUpService);
  
    SignUpService.$inject = ['$q', '$http', 'ApiPath'];
    function SignUpService($q, $http, ApiPath) {
      var service = this;

      service.signUpData = null;

      service.signUp = function(formData) {
        service.checkFavoriteDish(formData.favoritedish)
            .then(function(response) {
                formData.favoritedish = response;
            }) 

        if(formData) {
            service.signUpData = formData;
            return true;
        } else {
            return false;
        }
      };
    
      service.getSignUpData = function() {
          return service.signUpData;
      };
  
      service.checkFavoriteDish = function(shortName) {
        return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
            .then(function (response) {
                return response.data;
        });
      };

    }
  })();