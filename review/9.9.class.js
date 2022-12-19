class Employee {
    constructor(name, department, monthlyWorkHour,payRate){
        this.name = name;
        this.department = department;
        this.monthlyWorkHour = monthlyWorkHour;
        this.payRate = payRate;
    }
    MonthlyPay() {
        console.log(this.monthlyWorkHour*this.payRate); 
}
}


class regularEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, monthlyWorkHour){
        super(name,department,monthlyWorkHour,regularEmployee.PAY_RATE);
    }
}
const John = new regularEmployee('John', 'Marketing', 100);
const Suran = new regularEmployee('John', 'Engineering', 120);

class partTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, monthlyWorkHour){
        super(name,department,monthlyWorkHour,partTimeEmployee.PAY_RATE);
    }
}
const Amy = new partTimeEmployee('Amy', 'Sales', 20);
const Dean = new partTimeEmployee('Dean', 'Accounting', 30);

John.MonthlyPay();
Suran.MonthlyPay();
Amy.MonthlyPay();
Dean.MonthlyPay();