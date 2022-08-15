## `@kylehue/utils`
Basic utilities for 2D Game Development.

### Installation & Usage
```bash
npm i @kylehue/utils
```
### Features
- [clamp](#clamp)
- [dist](#dist)
- [lerp](#lerp)
- [map](#map)
- [random](#random)
- [uid](#uid)
- [randomFromArray](#randomfromarray)
- [uid](#uid)
- [Vector](#vector)
- [shapes.Circle](#shapescircle)
- [shapes.Rectangle](#shapesrectangle)
- [shapes.Polygon](#shapespolygon)
- [shapes.SAT](#shapessat)
- [events](#events)

### clamp
```js
const { clamp } = require("@kylehue/utils");

var num = 5;
num = clamp(num, 2, 12); // Limits num from 2 to 12
```
### dist
```js
const { dist } = require("@kylehue/utils");

var positionA = {
  x: 18,
  y: 53
}

var positionB = {
  x: 45,
  y: 77
}

// Get the distance between 2 vectors
var distance = dist(positionA.x, positionA.y, positionB.x, positionB.y);
```
### lerp
```js
const { lerp } = require("@kylehue/utils");

var num = 5;
var target = 10;
num = lerp(num, target, 0.1); // Linear interpolation of num to target
```
### map
```js
const { map } = require("@kylehue/utils");

var num = 5;
var newNum = map(num, 0, 10, 2, 7); // Re-maps num from one range to another
```
### random
```js
const { random } = require("@kylehue/utils");

var randomNumber = random(2, 5); // Get a random number that ranges from 2 to 5
```
### randomFromArray
```js
const { randomFromArray } = require("@kylehue/utils");

var colors = ["blue", "red", "green"];
var randomColor = randomFromArray(colors); // Get a random element from an array
```
### uid
```js
const { uid } = require("@kylehue/utils");

var id = uid(); // Get a unique ID from the current session
```
### Vector
```js
const { Vector } = require("@kylehue/utils");

var vectorA = new Vector(12, 5); // Creates a vector object
var vectorB = new Vector({x: 4, y: 8});

vectorA.add(vectorB); // Add vectorB to vectorA
vectorA.sub(vectorB); // Subtract vectorB to vectorA
vectorA.mult(2); // Scale vectorA
vectorA.div(2); // Divide vectorA
vectorA.set(5, 9); // Set vectorA.x to 5 and vectorA.y to 9
vectorA.reset(); // Set vectorA to 0, 0
vectorA.equals(vectorB); // Check if vectorA and vectorB is identical
vectorA.limit(1); // Limit the magnitude of vectorA to 1
vectorA.lerp(vectorB, 0.1); // Linear interpolation of vectorA to vectorB
vectorA.dist(vectorB); // Get the distance between vectorA and vectorB
vectorA.heading(vectorB); // Get the angle between vectorA and vectorB
vectorA.norm(); // Normalize vectorA to length of 1
vectorA.copy(); // Creates a copy of vectorA
vectorA.setMag(4); // Set the magnitude of vectorA to 4
vectorA.getMag(); // Get the magnitude of vectorA
vectorA.random2D(); // Randomize vectorA
```
### shapes.Circle
```js
const { shapes } = require("@kylehue/utils");

var x = 40, y = 12, radius = 6;
var circle = new shapes.Circle(x, y, radius); // Creates a circle object

circle.setRadius(20); // Change the radius
circle.scale(2, 2); // Double the size
circle.translate(12, 54); // Change the position
circle.rotate(Math.PI / 2); // Change the angle
circle.updateVertices(); // Update vertices
```
### shapes.Rectangle
```js
const { shapes } = require("@kylehue/utils");

var x = 60, y = 12, width = 20, height = 10;
var rect = new shapes.Rectangle(x, y, width, height); // Creates a rectangle object

rect.scale(2, 2); // Double the size
rect.translate(12, 54); // Change the position
rect.rotate(Math.PI / 2); // Change the angle
rect.updateVertices(12, 14); // Change the size and update vertices
```
### shapes.Polygon
```js
const { shapes } = require("@kylehue/utils");

var x = 80, y = 12, radius = 10, sides = 5;
var polygon = new shapes.Polygon(x, y, radius, sides); // Creates a polygon object

polygon.setRadius(20); // Change the radius
polygon.scale(2, 2); // Double the size
polygon.translate(12, 54); // Change the position
polygon.rotate(Math.PI / 2); // Change the angle
polygon.updateVertices(12); // Change the number of sides and update vertices
```
### shapes.SAT
```js
const { shapes } = require("@kylehue/utils");

var circle = new shapes.Circle(3, 5, 20);
var polygon = new shapes.Polygon(5, 2, 10, 6);

// Checks if the 2 shapes are colliding by using the Separating Axis Theorem
var isColliding = shapes.SAT(circle, polygon);
```
### events
```js
// main.js
const { events } = require("@kylehue/utils");

events.on("test", num => {
  console.log(num); // Prints 5 3x
});

events.once("test", num => {
  console.log(num); // Prints 5 1x
});
```
```js
// otherFile.js
const { events } = require("@kylehue/utils");

events.setMaxListeners(200); // Set max listeners to 200 (default is 100)
events.removeListener("name", "sample"); // Remove the listener named "sample"

for (var i = 0; i < 3; i++) events.emit("test", 5);
```
