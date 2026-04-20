const user = {
  userName: '田中',
  userEmail: 'yanaka@example.com',
  userAge: 30
}

console.log(user.userName);
console.log(user.userEmail);
console.log(user.userAge);
console.log(user.name);

function greet(name, age = 20) {
  console.log(`こんにちは、${name}さん (${age}歳)`);
}

greet('tanaka', 30);
greet('yamada');