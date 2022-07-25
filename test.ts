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
