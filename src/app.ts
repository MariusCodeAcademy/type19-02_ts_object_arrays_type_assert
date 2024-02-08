import { PersObj, people } from './data/persons.js';

console.log('Hello from app.ts!');

// console.table(people);

// parasyti fn
// gauna arggumentu people masyva ir atspaustina vardus

function printNames(arr: PersObj[]): void {
  const namesArr: string[] = arr.map((pObj) => pObj.name);
  console.log('namesArr ===', namesArr);
}

printNames(people);

// parasyti fn kuri isrikiuoja masyva pagal income ir grazina ji

function sortByIncome(arr: PersObj[]): PersObj[] {
  const sorted: PersObj[] = arr.sort((a, b) => a.income - b.income);
  return sorted;
}
const rikiuotas = sortByIncome(people);
// console.table(rikiuotas);

// parasyti fn kuri isrikiuoja masyva pagal income ir grazina ji
// argumentu paduosim stulpeli kuris gali buti tik age arba income

const enum NuberCol {
  age = 'age',
  income = 'income',
}

function sortByNuberVal(arr: PersObj[], sortBy: 'age' | 'income'): PersObj[] {
  const sorted: PersObj[] = arr.sort((a, b) => a[sortBy] - b[sortBy]);
  return sorted;
}
const rikiuotasPgl = sortByNuberVal(people, NuberCol.age);
console.table(rikiuotasPgl);

const enum StrCol {
  name = 'name',
  surname = 'surname',
  sex = 'sex',
}

function sortByStringVal(arr: PersObj[], sortBy: StrCol): PersObj[] {
  const sorted: PersObj[] = arr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  return sorted;
}
const rikiuotasPglVarda = sortByStringVal(people, StrCol.name);
console.table(rikiuotasPglVarda);
