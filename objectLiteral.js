// object literal
// properties hold some type of value
// methods contain some logic to apply to properties.
const circle = {
  radius: 1,      // variables that hold a value = properties
  location: {
    x: 1,
    y: 1
  },
  draw: function() {     // variables that contain functions = methods
    console.log('draw');
  }
};

// access circle members by using the dot notation
circle.draw();

// OBJECT LITERAL SYNTAX is not a good choice if an object has more than one method. 
// if an object has more than one method, we say that it has "behavior". 

// SOLUTION to avoiding object literal syntax, is to use "factories" aka "constructor" functions
export default circle;