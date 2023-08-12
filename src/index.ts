class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {}
}

const sorter = new Sorter([9, 2, 5, 0, -3, 6, 4, 8, 1, 3]);
sorter.sort();
console.log(sorter.collection);
