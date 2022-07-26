let test1: "test" = "test"; //this is literal only can be test

type actionType = "up" | "down";

function performAction(action: actionType | ComplexAction) {
  switch (action) {
    case "up":
      return 1;
    case "down":
      return -1;
  }
}

interface ComplexAction {
  s: string;
}

//Enums

enum Direction { //automatically goes from 0 to n-1
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//
enum Decision {
  Yes = "Yes",
  No = "No",
  Maybe = 0,
}

//Calc enum

enum DecisionTwo {
  Yes = 2,
  No = -1,
  Maybe = calcEnum(),
}

function calcEnum() {
  return 3;
}

enum Dice {
  one = 1,
  two,
  three,
}

function dice(dice: Dice) {
  switch (dice) {
    case Dice.one:
      return 4;
    case Dice.two:
      return 6;
    case Dice.three:
      return 8;
    default:
      const a: never = dice;
  }
}
