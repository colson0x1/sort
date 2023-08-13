"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([
    9, 2, 5, 0, -3, 6, 4, 8, 1, 3,
]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharacterCollection('MacBook');
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(900);
linkedList.add(-30);
linkedList.add(100);
linkedList.add(25);
linkedList.sort();
linkedList.print();
