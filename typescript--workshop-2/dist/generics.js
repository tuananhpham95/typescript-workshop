"use strict";
//Skapa typer som är flexibla och anpassningsbara
// Återanvändbarhet!
// uppgift 1:
const reverseArr = (arr) => {
    return arr.reverse();
};
const arr = [1, 2, 3, 4, 5];
console.log(reverseArr(arr));
//uppgift 2:
const makePair = (key, value) => {
    return { key, value };
};
const pair1 = makePair("name", "Sandra");
const pair2 = makePair("age", 28);
console.log(pair1);
console.log(pair2);
const unbox = (boxItem) => {
    return boxItem.item;
};
const stringBox = { item: "Hello, TypeScript!" };
console.log(unbox(stringBox));
//uppgift 4:
const numberOrString = (x) => {
    console.log(x);
};
const number = 10;
const str = "Tuan";
numberOrString(str);
