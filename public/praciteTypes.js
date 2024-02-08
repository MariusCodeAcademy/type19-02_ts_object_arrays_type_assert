"use strict";
// sukurti Customer tipa
// sukuriam Customer masyva su 5 customer objektais
const customersArr = [
    {
        name: 'James',
        age: 25,
        buySum: 100,
        isDriver: true,
    },
    {
        name: 'Jane',
        age: 35,
        buySum: 200,
        isDriver: false,
    },
    {
        name: 'John',
        age: 45,
        buySum: 300,
        isDriver: true,
    },
    {
        name: 'Jack',
        age: 55,
        buySum: 400,
        isDriver: false,
    },
    {
        name: 'Jill',
        age: 65,
        buySum: 500,
        isDriver: true,
    },
];
// 1. parasyti funkcija, kuri ima masyva kai argumenta
// grazina visu buySum sumu sumas
function allSums(arr) {
    let total = 0;
    arr.forEach((cObj) => {
        total += cObj.buySum;
    });
    console.log('total ===', total);
    return arr.reduce((total, cObj) => total + cObj.buySum, 0);
}
const sumSum = allSums(customersArr);
console.log('sumSum ===', sumSum);
// 2. parasyti funkcija, kuri ima masyva kai argumenta
// grazina visu kiek yra vairuotoju
const allDrivers = (arr) => {
    const drLen = arr.filter((cObj) => cObj.isDriver).length;
    console.log('drLen ===', drLen);
    return drLen;
};
allDrivers(customersArr);
function getNameAge(arr) {
    return arr.map((cObj) => {
        return {
            name: cObj.name,
            age: cObj.age,
        };
    });
}
console.log('getNameAge(customersArr) ===', getNameAge(customersArr));
//# sourceMappingURL=praciteTypes.js.map