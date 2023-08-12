"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is number[]
                // If collection is an array of numbers
                // comparison
                if (this.collection instanceof Array) {
                    // type of collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        // swapping
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // Only going to work if collection is string
                // If collection is a string
                // Logic to compare and swap characters in a string
                if (typeof this.collection === 'string') {
                    // type of collection === string
                }
            }
        }
    }
}
const sorter = new Sorter([9, 2, 5, 0, -3, 6, 4, 8, 1, 3]);
sorter.sort();
console.log(sorter.collection);
