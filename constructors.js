// Constructor function - not a true Class in JS

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      crossOriginIsolated.log('draw');
    }
  };
}
const circle = createCircle(1);


function MyClass(value){
  this.myProperty = value;
}

MyClass.prototype.myMethod = function() {
  return this.myProperty;
}

console.log()


const another = new Circle(1);
export default Circle();