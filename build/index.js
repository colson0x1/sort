"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([
//   9, 2, 5, 0, -3, 6, 4, 8, 1, 3,
// ]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data );
// const charactersCollection = new CharacterCollection('MacBook');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data)
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(900);
linkedList.add(-30);
linkedList.add(100);
linkedList.add(25);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
