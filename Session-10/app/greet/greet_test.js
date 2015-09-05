describe("Greeting", function(){
   beforeEach(module("myApp.greet"));

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
       it("Should populate greetMsg when greeted", inject(function($controller){

           var mockScope = {};
           var expectedMessage = 'Hi Magesh, Have a nice day!';

           $controller('greetController', {$scope : mockScope});

           mockScope.name = 'Magesh';
           mockScope.greet();
           expect(mockScope.greetMsg).toBe(expectedMessage);
       }));
   })

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
