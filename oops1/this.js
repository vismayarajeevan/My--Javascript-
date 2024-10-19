// this keyword

var person ={

    name: "john",
    age:18,
    getName(){
          console.log(this);
          console.log(this.name);
          console.log(this.age);
          
          
          
    }
};
person.getName();