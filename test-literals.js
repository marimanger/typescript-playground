"use strict";
let test1 = "test"; //this is literal only can be test
function performAction(action) {
    switch (action) {
        case "up":
            return 1;
        case "down":
            return -1;
    }
}
//Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
//
var Decision;
(function (Decision) {
    Decision["Yes"] = "Yes";
    Decision["No"] = "No";
    Decision[Decision["Maybe"] = 0] = "Maybe";
})(Decision || (Decision = {}));
//Calc enum
var DecisionTwo;
(function (DecisionTwo) {
    DecisionTwo[DecisionTwo["Yes"] = 2] = "Yes";
    DecisionTwo[DecisionTwo["No"] = -1] = "No";
    DecisionTwo[DecisionTwo["Maybe"] = calcEnum()] = "Maybe";
})(DecisionTwo || (DecisionTwo = {}));
function calcEnum() {
    return 3;
}
