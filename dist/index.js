"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tipos básicos
let age = 10;
const name = "maria";
const isValid = true;
//listas
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["maria", "Jane"];
//tupla
const person = [33, "jose"];
//Intersections
const productId = false;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
// Type Assertions
const productName = 'Boné';
console.log(direction);
//# sourceMappingURL=index.js.map