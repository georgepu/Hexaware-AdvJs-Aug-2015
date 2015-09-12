describe("Greeting", function(){
   var controllerService = null;
   beforeEach(module("myApp.greet"));
   beforeEach(inject(function($controller){
       controllerService = $controller;
   }));

   describe('greetController', function(){
       it("Should initialize the name to an empty string", inject(function($controller){

           var mockScope = {};
           $controller('greetController', {$scope : mockScope});

           expect(mockScope.name).toBe('');
       }));
       it("Should initialize the greetMsg to an empty string", inject(function($controller){

           var mockScope = {};
           $controller('greetController', {$scope : mockScope});

           expect(mockScope.greetMsg).toBe('');
       }));
       it("Should populate greetMsg when greeted", function(){
           var mockScope = {};
           var mockGreetService = {
               greet : function(){}
           };
           spyOn(mockGreetService, 'greet').and.returnValue('test msg');

           controllerService('greetController', {$scope : mockScope, greetService : mockGreetService});
           mockScope.name = 'Magesh';
           mockScope.greet();
           mockScope.greetMsg = 'test msg';
       });
   });

   describe('greetService', function(){
       it("Should greet the user", inject(function(greetService, $timeout){
           var name = 'Magesh',
               expectedMsg = 'Hi Magesh, Have a nice day!';
           var _result = null;
           greetService.greet(name).then(function(result){
               _result = result;
           });
           $timeout.flush();
           expect(_result).toBe(expectedMsg);
       }));
   });

   describe('trimTextFilter', function(){
       it("Should return the orginal string for short strings", inject(function($filter){
           var filter = $filter('trimText');
           var shortString = 'shortString';
           var expectedReslt = shortString;

           var result = filter(shortString);

           expect(result).toBe(expectedReslt);

       }));
        it("Should return the trimmed string for long strings", inject(function($filter){
           var filter = $filter('trimText');
           var longString = 'This is a considerably long string';
           var expectedReslt = 'This is a considerab...';

           var result = filter(longString);

           expect(result).toBe(expectedReslt);

       }));
   })
});
