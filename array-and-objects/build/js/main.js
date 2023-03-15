"use strict";
let stringArr = ['jigar', 'jay', 'vipul'];
let guitars = ['strat', 'Las paul', 8246];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'john';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('jim');
guitars = stringArr; // if it was stringArr = guitars it will not accept because the stringArr can not access number value
mixedData = guitars;
let test = [];
let bands = []; // This i empty array with declaring it is string
bands.push('string');
// Tuple
let myTuple = ['jigar', 2002, true];
let mixed = ['john', 1, false];
mixed = myTuple;
myTuple[1] = 42;
mixed[0] = 12;
// Objects
let myObj;
myObj = [];
console.log(typeof (myObj));
myObj = bands;
myObj = {};
const exampleobj = {
    prop1: 'Jigar',
    prop2: true,
};
exampleobj.prop2 = false;
exampleobj.prop1 = 'kalariya';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [123, 4323, 'FG234G']
};
let jp = {
    // name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(jp));
// Enums
// Unlike most Typescript features, Enums are not a type-level addition to javascript but something added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["u"] = 1] = "u";
    Grade[Grade["a"] = 2] = "a";
    Grade[Grade["b"] = 3] = "b";
    Grade[Grade["c"] = 4] = "c";
})(Grade || (Grade = {}));
console.log(Grade.u);
