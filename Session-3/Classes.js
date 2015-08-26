Constructor Functions

1. invoked using "new"
2. this -> a new Object
3. this is returned by default

function Employee(id, name, salary){
   this.id = id;
   this.name = name;
   this.salary = salary;
}

Create a class "SalaryCalculator" that creates an object with the following characterestics

the created object should have the follwing attributes
    basic
    hra
    da
    tax (%)
    salary

the object should also exhibit the follwing method

    calculate()

when the calculate() method is invoked, the salary is calculated and populated in the "salary" attribute using the following formula

    gross = basic + hra + da;
    salary = gross - tax

function SalaryCalculator(defaults){
    defaults = defaults || {};
    this.basic = defaults.basic || 0;
    this.hra = defaults.hra || 0;
    this.da = defaults.da || 0;
    this.tax = defaults.tax || 0;
    this.salary = 0;
}
Employee.prototype.calculate = function(){
    var gross = this.basic + this.hra + this.da;
    this.salary = gross * ((100-this.tax)/100);
}



var x = y || z

if (y is truthy) return y else return z

true, false
truthy, falsy -> non boolean values that convert to a boolean equivalent when subjected to a boolean expression



