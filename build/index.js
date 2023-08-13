"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([
//   9, 2, 5, 0, -3, 6, 4, 8, 1, 3,
// ]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data );
const charactersCollection = new CharactersCollection_1.CharacterCollection('MacBook');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
