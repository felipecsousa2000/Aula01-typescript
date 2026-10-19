//Tipos básicos
let age: number = 10;
const name: string = "maria";
const isValid: boolean = true;


//listas
const ids: number[] = [1,2,3,4,5]
const booleans : boolean[] = [true, false, true, false];
const names: string[] = [ "maria", "Jane"]

//tupla
const person:[number,string] = [33, "jose"]

//Intersections
const productId: string | number | boolean = false

//Enum
enum Direction{
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
}

const direction = Direction.Left

// Type Assertions
const productName: any = 'Boné'

console.log(direction);