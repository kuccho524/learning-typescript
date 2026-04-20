// let userName: string = '太郎';
// let age: number = 30;
// let isStudent: boolean = true;

// 型推論
// let userName = '太郎';
// let age = 30;
// let isStudent = true;

function add1(a: number, b: number): number {
  return a + b;
}

//
const add2 = (a: number, b: number): number => {
  return a + b;
}

add1(5, 3);
// add1(5, '3');

// NaN (Not a Number)
let result1: number = 0 / 0;
console.log(result1);
console.log(Number.isNaN(result1));

let result2: number = parseInt('hello');
console.log(result2)

// Infinity
let result3: number = 1 / 0;
console.log(result3);
console.log(result3 === Infinity);
console.log(Number.isFinite(result3));
let result4: number = -1 / 0;
console.log(result4);

// 配列型
// 角カッコを使う記法
// let names: string[] = ['taro', 'jiro', 'hanako'];
// let ages: number[] = [25, 30, 35];
// let flags: boolean[] = [true, false, true];

// ジェネリクスを使う記法
// Array<型名>
let names: Array<string> = ['taro', 'jiro', 'hanako'];
let ages: Array<number> = [25, 30, 35];
let flags: Array<boolean> = [true, false, true];

names.push('saburo');
console.log(names.length);

// オブジェクト型
let user: {
  name: string,
  age: number,
  address: {city: string, zipCode: string}
} = {
  name: 'tanaka',
  age: 30,
  address: {
    city: '東京都',
    zipCode: '000-0000'
  }
};

// any型
// どの型にも対応可能
let value: any = 'test';
value = 123;
value = true;
value = {}

// 型ガード
function process(value: any) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value.toString();
  } else if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  } else if (value instanceof Error) {
    return value.message;
  } else {
    return '処理できない型です';
  }
}

// unknouwn型
// any型より安全
let value2: unknown = 'test';
if (typeof value2 === 'string') {
  value2.toUpperCase();
}

let value3: any = 'test';
value3.toUpperCase();

// void型
function greet(name: string): void {
  console.log(`こんにちは、 ${name}さん`);
}

// デフォルト引数
function greet1(name: string, age = 20) {
  console.log(`こんにちは、${name}さん (${age}歳)`);
}

greet1('tanaka', 30);
greet1('yamada');

// オプション引数
function greet2(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`こんにちは、${name}さん (${age}歳)`);
  } else {
    console.log(`こんにちは、 ${name}さん`);
  }
}

greet2('tanaka', 30);
greet2('yamada');

// union型
// |を使って型を指定する
let input: string | number | boolean;
input = 'hello';
input = 123;
input = true;

function processId(id: string | number): string {
  if (typeof id === 'string') {
    return id.toUpperCase();
  } else {
    return id.toString();
  }
}

// Literal型
// |を使って値を指定する
let size: 'small' | 'midium' | 'lerge';
size = 'small';
size = 'midium';

let httpStatus = 200 | 404 | 500;
httpStatus = 200;
httpStatus = 400;
// httpStatus = 403;

// 型アサーション
// アサーション：「断言」「主張」
// 変数名 as 型名
let value4: any = 'hello';
let valueLength: number = (value4 as string).length;

//const btn = document.getElementById('submit') as HTMLButtonElement;
// btn.disabled = true;

// 通常の配列
let names1: string[] = ['tanaka', 'yamada'];

// tuple型
// tuple：順序のある配列型
let user1: [string, number] = ['tanaka', 30];

// enum型
// enumeration：列挙
enum Gender {
  Male,
  Female,
  Other
}
let userGender: Gender = Gender.Male;
console.log(userGender);
console.log(Gender.Female);

enum GenderString {
  Male = 'male',
  Female = 'Female',
  Other = 'other'
}
let genderString: GenderString = GenderString.Male;
console.log(genderString);
console.log(GenderString.Female);