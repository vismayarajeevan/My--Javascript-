// call


function getName(){
    console.log(this.name);
    console.log(this.age);
}

var person1 ={
    name:"john",
    age:18,
    
};

var person2 ={
    name:"joe",
    age:12,
    
};

getName.call(person1);

// apply

getName.apply(person2);

//bind

var newgetName= getName.bind(person2);
newgetName();