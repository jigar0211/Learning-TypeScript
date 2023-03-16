"use strict";
// Literal types
let myName;
let username;
username = 'jigar'; // in this username varible only allow name that has been declared in variable
// Functions 
const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
console.log(subtract(30, 10));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// Optional Parameters 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameter
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 8));
// Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custome type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type 
const numberOrString = (value) => {
    if (typeof value == 'string')
        return 'string';
    if (typeof value == 'number')
        return 'number';
    return createError('This should never happen!');
};
