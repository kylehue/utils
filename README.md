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
- [randomFromArray](#randomFromArray)
- [uid](#uid)
- [Vector](#Vector)
- [shapes.Circle](#shapesCircle)
- [shapes.Rectangle](#shapesRectangle)
- [shapes.Polygon](#shapesPolygon)
- [shapes.SAT](#shapesSAT)

### clamp
```js
const { clamp } = require("@kylehue/utils");

var num = 5;
num = clamp(num, 2, 12); // Limits num from 2 to 12
```
### dist
```js
const { dist } = require("@kylehue/utils");

var position_A = {
  x: 18,
  y: 53
}

var position_B = {
  x: 45,
  y: 77
}

var distance = dist(position_A.x, position_A.y, position_B.x, position_B.y); // Returns the distance of 2 vectors
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
``````
### random
```js
const { random } = require("@kylehue/utils");

var randomNumber = random(2, 5); // Get a random number that ranges from 2 to 5
``````
### randomFromArray
```js
const { randomFromArray } = require("@kylehue/utils");

var colors = ["blue", "red", "green"];
var randomColor = randomFromArray(colors); // Get a random element from an array
``````
### uid
```js
const { uid } = require("@kylehue/utils");

var id = uid(); // Get a unique ID from the current session
``````
### Vector
```js
const { Vector } = require("@kylehue/utils");

var vector_A = new Vector(12, 5); // Creates a vector object
var vector_B = new Vector({x: 4, y: 8});

vector_A.add(vector_B); // Add vector_B to vector_A
vector_A.sub(vector_B); // Subtract vector_B to vector_A
vector_A.mult(2); // Scale vector_A
vector_A.div(2); // Divide vector_A
vector_A.set(5, 9); // Set vector_A.x to 5 and vector_A.y to 9
vector_A.reset(); // Set vector_A to 0
vector_A.equals(vector_B); // Check if vector_A and vector_B is identical
vector_A.limit(1); // Limit the magnitude of vector_A
vector_A.lerp(vector_B); // Linear interpolation of vector_A to vector_B
vector_A.dist(vector_B); // Get the distance between vector_A and vector_B
vector_A.heading(vector_B); // Get the angle between vector_A and vector_B
vector_A.norm(0, 0); // Normalize vector_A to length of 1
vector_A.copy(); // Creates a copy of vector_A
vector_A.setMag(4); // Set the magnitude of vector_A to 4
vector_A.getMag(); // Get the magnitude of vector_A
vector_A.random2D(); // Randomize vector_A
``````
### shapes.Circle
```js
const { shapes } = require("@kylehue/utils");

var x = 40, y = 12, radius = 6;
var circle = new shapes.Circle(x, y, radius); // Creates a circle object
``````
### shapes.Rectangle
```js
const { shapes } = require("@kylehue/utils");

var x = 60, y = 12, width = 20, height = 10;
var rect = new shapes.Rectangle(x, y, width, height); // Creates a rectangle object
```
### shapes.Polygon
```js
const { shapes } = require("@kylehue/utils");

var x = 80, y = 12, radius = 10, sides = 5;
var polygon = new shapes.Polygon(x, y, radius, sides); // Creates a polygon object
```
### shapes.SAT
```js
const { shapes } = require("@kylehue/utils");

var circle = new shapes.Circle(3, 5, 20);
var polygon = new shapes.Polygon(5, 2, 10, 6);

var isColliding = shapes.SAT(circle, polygon); // Checks if the 2 shapes are colliding by using the Separating Axis Theorem
```
