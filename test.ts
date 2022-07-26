
const a: number = 5;
const b = "kkdke";
const c = true;

let d: string[] = ["a", "b", "c"];

function test(a: string): number | boolean {
  return true;
}

const test2 = (a: number): boolean => {
  return true;
};

d = d.map((a: string) => a.toLowerCase());

function countCoord(coord: { a: number; b: number }): number {
  return coord.a + coord.b;
}

console.log(countCoord({ a: 1, b: 2 }));

//used mostly when we want to make string or number 
type Point = {
  x: number;
  y: number;
};

//different between interface and type in typescript that you can reassign 
//and add more properties to interface

//most used 
interface IPoint {
  x: number;
  y: number;
}

function printPoint(point: Point) {
  console.log(point.x, point.y);
}

type stringOrNumber = string | number;

function printStringOrNumber(a: stringOrNumber) {
  console.log(a);
}

//casting
const myCanvas = document.getElementById("myCanvas") as HTMLCanvasElement;
