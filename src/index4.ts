// Generics
// <型名>
function getFirstElement<T>(array: T[]): T | undefined {
   return array[0];
 }

const users = ['tanaka', 'sato', 'suzuki'];
const firstUser = getFirstElement(users);
console.log(firstUser);

const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers);
console.log(firstNumber);

function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const stringNumberPair = createPair('test', 25);
console.log(stringNumberPair);
const booleanStringPair = createPair(true, '有効');
console.log(booleanStringPair);

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  name: 'tanaka',
  age: 30,
  isActive: true,
};
getProperty(user, 'name');
getProperty(user, 'age');

// ジェネリッククラス
class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberContainer = new Container(30);
numberContainer.getValue()
const stringContainer = new Container<string>('test');
stringContainer.getValue()

class Pair<T, U> {
  constructor(private first: T, private second: U) {}

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }
}

const notFoundError = new Pair(404, 'Not Found');
notFoundError.getFirst()
notFoundError.getSecond()