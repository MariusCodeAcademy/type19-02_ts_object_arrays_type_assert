import { people } from './data/persons.js';
console.log('Hello from app.ts!');
// console.table(people);
// parasyti fn
// gauna arggumentu people masyva ir atspaustina vardus
function printNames(arr) {
    const namesArr = arr.map((pObj) => pObj.name);
    console.log('namesArr ===', namesArr);
}
printNames(people);
// parasyti fn kuri isrikiuoja masyva pagal income ir grazina ji
function sortByIncome(arr) {
    const sorted = arr.sort((a, b) => a.income - b.income);
    return sorted;
}
const rikiuotas = sortByIncome(people);
function sortByNuberVal(arr, sortBy) {
    const sorted = arr.sort((a, b) => a[sortBy] - b[sortBy]);
    return sorted;
}
const rikiuotasPgl = sortByNuberVal(people, "age" /* NuberCol.age */);
console.table(rikiuotasPgl);
function sortByStringVal(arr, sortBy) {
    const sorted = arr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    return sorted;
}
const rikiuotasPglVarda = sortByStringVal(people, "name" /* StrCol.name */);
console.table(rikiuotasPglVarda);
//# sourceMappingURL=app.js.map