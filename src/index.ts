import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([
//   9, 2, 5, 0, -3, 6, 4, 8, 1, 3,
// ]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data );

const charactersCollection = new CharacterCollection('MacBook');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data)