import factoryCircle from "./factories.js";
import objectLiteralCircle from "./objectLiteral.js";
import constructorCircle from "./constructors.js";

//object Literal usage
objectLiteralCircle.draw();

//factory usage
const factory_circle = factoryCircle(1);
console.log(factory_circle.radius)
factory_circle.draw();

//constructor function usage
const conCircle = new constructorCircle(1);