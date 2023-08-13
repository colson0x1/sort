# Sort TypeScript CLI

**Sort TypeScript CLI** is a command-line application built with TypeScript that provides sorting capabilities for arrays, linked lists, and more. It demonstrates the concepts of inheritance, abstract classes, interfaces, and encapsulation in TypeScript programming.

![sort - sorting numbers, characters and Linked List](https://i.imgur.com/lvKkElB.png)

## Features

- Sorts arrays using the Bubble Sort algorithm.
- Supports sorting of linked lists.
- Handles arrays of numbers and strings as well as linked lists of numbers.
- Utilizes inheritance and abstract classes for code reuse.
- Demonstrates encapsulation and code organization.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/colson0x1/sort.git
```

2. Navigate to the project directory:

```bash
cd sort
```

3. Install dependencies using npm:

```bash
npm install
```

## Usage

1. Modify the data in `src/index.ts` to specify the data you want to sort.

2. Run the following command to build and run the application:

```bash
npm start
```

This command will compile TypeScript code, start a development server, and display the sorted data.

## Concepts Demonstrated

### Inheritance and Abstract Classes

The application utilizes inheritance and abstract classes to create a reusable sorting mechanism. The `Sorter` class acts as an abstract base class, providing a common sorting algorithm that can be inherited by specific data types like arrays and linked lists. This approach promotes code reusability and maintainability.

### Interfaces

The `Sortable` interface defines the contract for classes that can be sorted. It enforces the implementation of methods like `compare` and `swap`, ensuring that classes that implement this interface can be used with the sorting algorithm.

### Encapsulation

Each data structure (`NumbersCollection`, `CharacterCollection`, `LinkedList`) encapsulates its sorting logic. This encapsulation isolates the sorting implementation within each class and provides a clear separation of concerns, making the code easier to understand and maintain.

## Configuration

### `tsconfig.json`

The `tsconfig.json` file contains TypeScript compiler configuration options tailored for this project. Notable options include:

- The `target` option specifying the ECMAScript version.
- The `module` option indicating the module system used (CommonJS in this case).
- The `outDir` option specifying the output directory for compiled files.
- The `esModuleInterop` option to facilitate importing CommonJS modules.

## Dependencies

- `concurrently`: Allows running multiple npm scripts concurrently.
- `nodemon`: Automatically restarts the Node.js application when code changes are detected.

---

## Screenshots

### sort - sorting numbers collection
![sort - sorting numbers collection](https://i.imgur.com/DcEfeVB.png)

### sort - sorting characters collection
![### sort - sorting characters collection](https://i.imgur.com/qTdD0C0.png)

### sort - sorting Linked List
![### sort - sorting Linked List](https://i.imgur.com/FadWhR0.png)
