"use strict";
const a = 5;
const b = "kkdke";
const c = true;
let d = ["a", "b", "c"];
function test(a) {
    return true;
}
const test2 = (a) => {
    return true;
};
d = d.map((a) => a.toLowerCase());
function countCoord(coord) {
    return coord.a + coord.b;
}
console.log(countCoord({ a: 1, b: 2 }));
function printPoint(point) {
    console.log(point.x, point.y);
}
function printStringOrNumber(a) {
    console.log(a);
}
//casting
const myCanvas = document.getElementById("myCanvas");
