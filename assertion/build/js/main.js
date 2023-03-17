"use strict";
// convert more or less specific
let a = 'Hello';
let b = a; // Less Specific Type
let c = a; // More Specific
let d = 'World';
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVAl = addOrConcat(2, 2, 'concat');
// ST sees no problem - but a string is returned
let nextVAl = addOrConcat(2, 2, 'concat');
// 10 as string
// this is right way to declear 10 as string
10;
// The Dom
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
