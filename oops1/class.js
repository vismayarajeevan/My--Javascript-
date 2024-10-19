
class Employee{
    constructor(name,position, salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getSalary(){
        console.log("salary of "+this.name+" is "+this.salary );
        
    }
}

let e1= new Employee("philip","accountant",8000);
let e2=new Employee("john","salesman",9000);
console.log(e1.name);
e1.getSalary();
