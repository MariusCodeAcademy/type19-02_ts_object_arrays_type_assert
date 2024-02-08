// Tuple

type UserArr = [string, number, boolean];

const user: [string, number, boolean] = ['James', 25, true];

// const usr2: UserArr = ['Jane', false, 30];
const usr2: UserArr = ['Jane', 30, true];

user[0] = 'Mike';

// su tuple nereiketu daryti push, pop, shift unshift, splice ir kitu masyva keicianciu operaciju
// user.push(50); // zinomas bugas

console.log('user ===', user);

const users: [number, string][] = [
  [1, 'james@email.com'],
  [2, 'mike@email.com'],
  [3, 'Jill@email.com'],
  [4, 'Sebentautas@email.com'],
];

users.push([6, 'mail@mail.com']);

console.log('users ===', users);
