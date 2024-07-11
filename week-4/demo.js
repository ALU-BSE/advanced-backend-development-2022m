class Employee{
    constructor(name, address, employeeId) {
        this._name = name;
        this._address = address;
        this._employeeId = employeeId;
    }

    get name(){
        return this._name;
    }

    get address(){
        return this._address;
    }

    get employeeId(){
        return this._employeeId;
    }

    set name(newName){
        this._name = newName;
    }

    set address(newAddress){
        this._address = newAddress;
    }

    set employeeId(newEmployeeId){
        this._employeeId = newEmployeeId;
    }

    calculateSalary(){
        throw new Error('This method must be implemented');
    }

}

class MonthlyEmployee extends Employee{
    constructor(name, address, employeeId, monthlySalary, taxRate) {
        super(name, address, employeeId);
        this._monthlySalary = monthlySalary;
        this._taxRate = taxRate;
    }


    calculateSalary() {
        return this._monthlySalary * (1 - this._taxRate);
    }
}

class HourlyEmployee extends Employee{
    constructor(name, address, employeeId, hourlyRate, hoursWorked) {
        super(name, address, employeeId);
        this._hourlyRate = hourlyRate;
        this._hoursWorked = hoursWorked;
    }

    calculateSalary() {
        return this._hourlyRate * this._hoursWorked;
    }
}

class FullTimeEmployee extends Employee{
    constructor(name, address, employeeId, monthlySalary, taxRate, bonus) {
        super(name, address, employeeId);
        this._monthlySalary = monthlySalary;
        this._taxRate = taxRate;
        this._bonus = bonus;
    }

    calculateSalary() {
        return this._monthlySalary * (1 - this._taxRate) + this._bonus;
    }
}

let monthlyEmployee = new MonthlyEmployee('John Doe', '123 Main St', 123, 5000, 0.1);
let hourlyEmployee = new HourlyEmployee('Jane Doe', '123 Main St', 124, 20, 40);
let fullTimeEmployee = new FullTimeEmployee('Jim Doe', '123 Main St', 125, 5000, 0.1, 1000);
