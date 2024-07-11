classes:
Employee
monthly_employees
casual_employees
contract_employees

Employee
        * name
        * address
        * employee_id
        CalculateSalary()
    _ monthly_employees inherit Employee
        * tax
    - casual_employees inherit Employee
        * hourly_rate
    - contract_employees inherit Employee
        * monthly_rate
        * tax

emp_one = new monthly_employees('John Doe', '123 Main St', 123, 5000, 0.1)

# polymorphism
    * CalculateSalary() is a polymorphic method
    * It can be called with different arguments
    * It can have different implementations
Approach #1: method signature:
    CalculateSalary()
    CalculateSalary(tax)
    CalculateSalary(hourly_rate)
    CalculateSalary(monthly_rate, tax)

Approach #2: Method Overriding


Encapsulation: 
    * Hiding the internal state of an object
    * Exposing only the necessary functionality
    * Achieved using access modifiers
    * Access modifiers:
        * public
        * private
        * protected
    * In JavaScript, encapsulation is achieved using closures
    * In ES6, encapsulation is achieved using classes

class Car{
    constructor(value){
        this.brand = value
    }
    private method1(){
        // public method
    }
}
car_one = new Car()
car_one.method1() # Error: method1 is private