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
// 1. parasyti Fn kuri atspausdina visus vyrus
// 1.1 parasyti Fn kuri  atspausdina moteris
// 2. parasyti Fn kuri grazina masyve moteris jaunesnies nei 35 metai
// 2.1 parasyti Fn kuri grazina masyve varda ir pavarde jaunesnies nei 35 metai
// 3. parasyti interface funkcijai ir Fn kuri grazina masyve visus žmones kurie turi mašinas
// 4. parasyti fn atspausdinti visų vairuojančių žmonių lytis
// 4.1 parasyti fn grazinti objektu masyva kuriame yra vardas ir lytis visų vairuojančių žmonių
// 5. parasyti fn kuri suskaiciuoja ir grazina kiek yra vairuojanciu vyru ir moteru
// pvz {man: 4, woman: 5}
//# sourceMappingURL=app.js.map