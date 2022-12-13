// ``
// Create a new file - pet.js
// Create a Pet constructor
// Assign values to the following properties in your Pet constructor via parameters:
// name
// species
// Add an eat method to your Pet's prototype. This method should accept a food parameter and output a string containing the name property and the food that was eaten. For example: 'Scooby Doo ate a Scooby Snack'.
// ``


const Pet = function(name, age){
    this.name = name;
    this.age = age;
};

Pet.prototype.eat = function(food){
    console.log(`Our pet ${this.name} ate this ${food} food`);

};
module.exports = Pet

// const wilbur = new Pet('Wilber the dog', 13);
// console.log('from wilbur comes', wilbur.name, wilbur.age);
// wilbur.eat('Bricks')

// const nelly = new Pet('Nelly the cat', 2)
// console.log(nelly.name, nelly.age);
// nelly.eat('catnip')