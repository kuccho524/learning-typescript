// インターフェイスの定義
interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: 'tanaka',
  age: 30
}

// インターフェイスでの関数定義
interface Caluculator {
  (x: number, y: number): number;
}

const add: Caluculator = (x, y) => {
  return x + y;
}

console.log(add(5, 3));

const multiply: Caluculator = (x, y) => {
  return x * y;
}

console.log(multiply(5, 3));

interface EventHandler {
  (message: string): void;
}

function process(input: string, handler: EventHandler): void {
  handler(`処理完了: ${input}`);
}

const logger: EventHandler = (message) => {
  console.log(message);
}

process('テストデータ', logger);

// オプショナルプロパティ
interface User1 {
  name: string,
  age?: number,
  email?: string
}

const user: User1 = {
  name: 'tanaka',
  age: 30
}

console.log(user.email);

// readonly
// オブジェクトのプロパティを固定する
interface User2 {
  readonly id: number,
  name: string
}

const user2: User2 = {
  id: 1,
  name: 'tanaka'
}

// ネストしたinterface
// ネスト: 入れ子
interface Product {
  id: number,
  name: string,
  price: number
}

interface OrderItem {
  product: Product,
  quantity: number
}

const orderItem: OrderItem = {
  product: {
    id: 1,
    name: 'ノートパソコン',
    price: 98000
  },
  quantity: 1
}

interface Order {
  id: number,
  custmerName: string,
  items: OrderItem[];
}

const order: Order = {
  id: 1001,
  custmerName: 'tanaka',
  items: [
    {
      product: {
        id: 1,
        name: 'ノートパソコン',
        price: 98000
      },
      quantity: 1
    },
    {
      product: {
        id: 2,
        name: 'マウス',
        price: 2000
      },
      quantity: 2
    }
  ]
}

// 型エイリアス
// alias: 型名
type User3 = {
  id: number;
  name: string,
  email: string
};

const user3: User3 = {
  id: 1,
  name: 'tanaka',
  email: 'tanaka@example.com'
};

type Status = 'loading' | 'success' | 'error';
function checkStatus(status: Status): void {
  console.log(`ステータス：${status}`);
}

// 関数の型を定義
type Caluculator2 = (x: number, y:number) => number;

const add2: Caluculator2 = (x, y) => {
  return x + y;
}
console.log(add(5, 3));

type UserId = number;
type Language = 'ja' | 'en';
type User4 = {
  id: UserId,
  name: string,
  preferences: {
    language: Language;
  }
};

const user4: User4 = {
  id: 1,
  name: 'tanaka',
  preferences: {
    language: 'ja'
  }
};

const user5: User4 = {
  id: 2,
  name: 'sato',
  preferences: {
    language: 'en'
  }
};

const users : User4[] = [user4, user5];

function getUserByUserId(id: UserId): User4 | null {
  return users.find(user4 => user4.id === id) || null;
}

// extends
interface User5 {
  id: number;
  name: string;
}

interface AdminUser extends User5 {
  role: 'super' | 'sub';
}

interface ContactInfo {
  phone: string;
  address: string;
}

interface PremiumUser extends User5, ContactInfo {
  joinDate: string;
}

const admin: AdminUser = {
  id: 1,
  name: 'tanaka',
  role: 'super'
}

// Intersection型
// Intersection：「AかつB」
type PersonalInfo = {
  name: string;
  age: number;
}

type ContactInf2 = {
  email: string;
}

type UserProfile = PersonalInfo & ContactInf2;

const user7: UserProfile = {
  name: 'tanaka',
  age: 30,
  email: 'tanaka@example.com'
}