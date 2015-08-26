
function getPrimeFinder(){
    var cache = {};

    function isPrime(n){
        console.log('Processing ' , n);
        if (n <= 3) return true;
        for(var i=2; i<=(n/2); i++)
            if (n % i === 0) return false;
        return true;
    }

    function checkPrime(n){
        if (typeof cache[n] === 'undefined')
            cache[n] = isPrime(n);
        return cache[n];
    }
    return checkPrime;
}

function add(x,y){
    console.log("processing ", x , " and ", y);
    return x + y;
}

function isPrime(n){
    console.log('Processing ' , n);
    if (n <= 3) return true;
    for(var i=2; i<=(n/2); i++)
        if (n % i === 0) return false;
    return true;
}

function memoize(fn){
    var cache = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === 'undefined')
            cache[key] = fn.apply(this, arguments);
        return cache[key];
    }
}

var memoizedAdd = memoize(add);
memoizedAdd(100,200) //displays 'processing'
memoizedAdd(200,300) //displays 'processing'

memoizedAdd(100,200) //doesnot display 'processing'
memoizedAdd(200,300) //doesnot display 'processing'


var primeFinder = memoize(isPrime)
primeFinder(100)
primeFinder(100);
