const user = {
  userName: '田中',
  userEmail: 'yanaka@example.com',
  userAge: 30
}

user.userAge;

function greetUser(userName: String, userAge: number): string {
  return `こんにちは、${userName}さん (${userAge}歳)`;
}

greetUser('佐藤', 25);