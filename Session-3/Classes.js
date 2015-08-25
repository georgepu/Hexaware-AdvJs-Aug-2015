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

