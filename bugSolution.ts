function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

function handleMultipleUsers(users:string[]): string {
  let greeting = '';
  for(let i=0; i<users.length;i++){
    greeting += greeter(users[i]) + '\n';
  }
  return greeting;
}

console.log(handleMultipleUsers(user));