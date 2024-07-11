class Employee{
    constructor(name, employeeId, address, department) {
        this._name = name;
        this._employeeId = employeeId;
        this._address = address;
        this._department = department;
    }

    // getters & setters
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get employeeId(){
        return this._employeeId;
    }
    set employeeId(employeeId){
        this._employeeId = employeeId;
        // auto generate employee id
        this._employeeId = Math.floor(Math.random() * 1000);

    }

    get address(){
        return this._address;
    }
    set address(address){
        this._address = address;
    }

    get department(){
        return this._department;
    }
    set department(department){
        this._department = department
    }

    calculateSalary(){
        throw new Error("CalculateSalary must be implemented in the subclass");
    }
}

class FullTimeEmployee extends Employee{
    constructor(name, employeeId, address, department, salary, bonus) {
        super(name, employeeId, address, department);
        this._salary = salary;
        this._bonus = bonus;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }

    get bonus(){
        return this._bonus;
    }

    set bonus(bonus){
        this._bonus = bonus;
    }

    calculateSalary() {
        return this._salary / 12 + this._bonus;
    }
}

// department class with list employees as property from employees class





let emp1 = new Employee();
console.log(emp1.name("John"));

let emp2 = new FullTimeEmployee();
console.log(emp2.name("Jane"));
// let dept = new Department("deptname", [emp1, emp2]);
let emp3 = new Employee("John", 123, "123 Main St", dept);

