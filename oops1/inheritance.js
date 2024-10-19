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
class manager extends Employee{

}
class supervisor extends Employee{

}
let m1=new manager("smith","accountant",9000);
console.log(m1);
let s1= new supervisor("anu","salesgirl",8000);
s1.getSalary();

