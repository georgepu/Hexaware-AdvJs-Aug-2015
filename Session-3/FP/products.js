var products = [
    {id : 4, name : "Pen", cost : 20, units : 50, category : 1},
    {id : 8, name : "Hen", cost : 60, units : 70, category : 2},
    {id : 6, name : "Den", cost : 50, units : 30, category : 1},
    {id : 3, name : "Ten", cost : 70, units : 80, category : 2},
    {id : 2, name : "Len", cost : 30, units : 20, category : 1}
]

function print(title, action){
    console.group(title);
    action();
    console.groupEnd();
}

/*
    sort
    filter
    sum
    countBy
    all
    any
    groupBy
*/

print("The default product list", function(){
    console.table(products);
});

print("Sort", function(){
    print("Default sort [by id]", function(){
        function sort(){
            for(var i=0; i<products.length -1; i++)
                for(var j=i + 1; j<products.length; j++){
                    var left = products[i],
                        right = products[j];
                    if (left.id > right.id){
                        products[i] = products[j];
                        products[j] = left;
                    }
                }
        }
        sort();
        console.table(products);
    });
    print("Generic sort [by any comparison]", function(){
        function sort(list, comparer){
            for(var i=0; i<list.length -1; i++)
                for(var j=i + 1; j<list.length; j++){
                    var left = list[i],
                        right = list[j];
                    if (comparer(left, right) > 0){
                        list[i] = list[j];
                        list[j] = left;
                    }
                }
        }
        print("Products By value [ cost * units]", function(){
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value > p2Value) return 1;
                return 0;
            }
            sort(products, productComparerByValue);
            console.table(products);
        });

    })
});

print("Filter", function(){
    function filter(list, criteriaFn){
        var result = [];
        for(var i=0; i<list.length; i++)
            if (criteriaFn(list[i]))
                result.push(list[i]);
        return result;
    }

    function negate(fn){
        return function(){
            return !fn.apply(this, arguments);
        }
    }
    var costlyProductCriteria = function(product){
        return product.cost > 50;
    };
    print("All costly products [ cost > 50 ]", function(){
        var costlyProducts = filter(products, costlyProductCriteria);
        console.table(costlyProducts);
    });
    print("All affordable products [ cost <= 50 ]", function(){
        var affordableProductCriteria = negate(costlyProductCriteria);
        var affordableProducts = filter(products, affordableProductCriteria);
        console.table(affordableProducts);
    });
});

print("Sum", function(){
    function sum(list, valueSelector){
        var result = 0;
        var _valueSelector = typeof valueSelector === 'string'
            ? function(item){ return item[valueSelector] }
            : valueSelector;

        for(var i=0; i<list.length; i++)
            result += _valueSelector(list[i]);
        return result;
    }
    print("Total units", function(){
        /*var unitsSelector = function(p){ return p.units; };
        var totalUnits = sum(products, unitsSelector);*/

        var totalUnits = sum(products, "units");
        console.log(totalUnits);
    });
    print("Total product value", function(){
        var productValueSelector = function(p){ return p.units * p.cost; };
        var totalProductValue = sum(products, productValueSelector);
        console.log(totalProductValue);
    });
});

print("All", function(){
    function all(list, criteria){
        for(var i=0; i<list.length; i++)
            if (!criteria(list[i]))
                return false;
        return true;
    }
     var costlyProductCriteria = function(product){
        return product.cost > 50;
    };
    console.log("Are all the products costly ? ", all(products, costlyProductCriteria));
});

print("Any", function(){
    function any(list, criteria){
        for(var i=0; i<list.length; i++)
            if (criteria(list[i]))
                return true;
        return false;
    }
     var costlyProductCriteria = function(product){
        return product.cost > 50;
    };
    console.log("Is there atleast one costly product? ", any(products, costlyProductCriteria));
});

print("Group By", function(){
    function groupBy(list, valueSelector){
        var result = {};
        var _valueSelector = typeof valueSelector === 'string'
            ? function(item){ return item[valueSelector] }
            : valueSelector;
        for(var i=0; i<list.length; i++){
            var item = list[i];
            var key = _valueSelector(item);
            result[key] = result[key] || [];
            result[key].push(item);
        }
        return result;
    }
    print("Category", function(){
        var productsByCategory = groupBy(products, "category");
        for(var key in productsByCategory){
            print("Category - " + key, function(){
                console.table(productsByCategory[key]);
            });
        }
    });
    print("Cost", function(){
        var categorySelectorByCost = function(p){
            return p.cost > 50 ? "costly" : "affordable";
        }
        var productsByCost = groupBy(products, categorySelectorByCost);
        for(var key in productsByCost){
            print("Category - " + key, function(){
                console.table(productsByCost[key]);
            });
        }
    });


})

print("Map", function(){
    function map(list, iteratee){
        var result = [];
        for(var i=0; i<list.length; i++)
            result.push(iteratee(list[i]));
        return result;
    }
    var productsForDisplay = map(products, function(p){
        return { name : p.name, cost : p.cost }
    });
    console.table(productsForDisplay);
});

print("_.reduce", function(){
    var maxProductCost = _.reduce(products, function(result, product){
        return result > product.cost ? result : product.cost;
    }, 0);
    console.log("Max product cost = ", maxProductCost);
});



