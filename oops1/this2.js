// for multiple details 


function getName(){
    console.log(this.name);
    console.log(this.age);
}

var person1 ={
    name:"john",
    age:18,
    method: getName,
};

var person2 ={
    name:"joe",
    age:12,
    method: getName,
};

person1.method();
person2.method();