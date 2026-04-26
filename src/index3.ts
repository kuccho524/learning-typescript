// クラスについて
class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(message: string): string {
    return `${message}、${this.name}さん`
  }

  updateAge(newAge: number): void {
    this.age = newAge;
  }
}

const user1 = new User('tanaka', 30);
console.log(user1.greet('こんにちは'));
user1.updateAge(31);
console.log(user1);

// アクセス修飾子
// piblic
class User1 {
  // public name: string;
  // public age: number;

  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }

  constructor(
    public name: string,
    public age: number
  ){}

  public greet(): string {
    return `こんにちは、${this.name}さん`;
  }
}

const user2 = new User1('tanaka', 30);
console.log(user2.name);
console.log(user2.greet());

//private
class User2 {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
  this.name = name;
  this.age = age;
  }

  public greet(): string {
    return `こんにちは、${this.name}さん`;
  }
  public getAge(): number {
    return this.age;
  }
}

const user3 = new User2('tanaka', 30);
console.log(user3.name);
console.log(user3.greet());
// エラーになる
// console.log(user3.age);
console.log(user3.getAge());

// protected
class User3 {
  protected name: string;
  private age: number;

  constructor(name: string, age: number) {
  this.name = name;
  this.age = age;
  }

  public greet(): string {
    return `こんにちは、${this.name}さん`;
  }
  public getAge(): number {
    return this.age;
  }
}

class AdminUser extends User3 {
  private role: string;
  constructor(name: string, age: number, role: string) {
    super(name, age);
    this.role = role;
  }

  public displayAdminInfo(): string {
    return `管理者：${this.name}, 権限：${this.role}`;
  }
}

const user4 = new User3('tanaka', 30);
console.log(user4.greet());
const admin = new AdminUser('sato', 35, 'システム管理者');
console.log(admin.displayAdminInfo());
