// Factory function
function createCircle(radius) {
  return {
    radius,      // in ES5 if key/value pair have the same name, we can just use a single instance of the name on the whole line. 
    draw: function() {     
      console.log('draw');
    }
  };
}

const circle = createCircle(1);

export default createCircle;