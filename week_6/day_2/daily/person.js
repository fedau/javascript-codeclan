const Person = function(name){
    //  console.log('this', this)
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hi!, MY name is ${this.name}`);
}

module.exports = Person

// const shaggy =  new Person('Shaggy Rogers');
// // console.log('persons name from const shaggy', shaggy.greet());
// shaggy.greet()
// // to see all the prototypes attached
// console.log(Object.getPrototypeOf(shaggy));

// const lewis =  new Person('lewis Rogers');
// console.log('persons name from const lewis', lewis.greet());
