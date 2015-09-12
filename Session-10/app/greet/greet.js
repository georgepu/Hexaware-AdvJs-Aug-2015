'use strict';

angular.module('myApp.greet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/greet', {
    templateUrl: 'greet/greet.html',
    controller: 'greetController'
  });
}])

.filter('trimText', function(){
    return function(data){
        return data.length < 20 ? data : data.substr(0,20) + '...';
    }
})

.service('greetService', function($q, $timeout){
    this.greet = function(name){
       var deferred = $q.defer();
       $timeout(function(){
           var msg = 'Hi ' + name + ', Have a nice day!';
           deferred.resolve(msg);
       },3000);
       return deferred.promise;
       //return 'Hi ' + name + ', Have a nice day!';
    };
})

.controller('greetController', ['$scope', 'greetService', function($scope, greetService) {
    $scope.name = '';
    $scope.greetMsg = '';
    $scope.greet = function(){
        $scope.greetMsg = greetService.greet($scope.name);
    };
    /*$scope.greet = function(){
        $scope.greetMsg = 'Hi ' + $scope.name + ', Have a nice day!';
    }*/
}]);
