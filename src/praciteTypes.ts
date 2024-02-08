// sukurti Customer tipa

// Customer tures name, age, buySum, isDriver
interface CustomerInterface {
  name: string;
  age: number;
  buySum: number;
  isDriver: boolean;
}
// sukuriam Customer masyva su 5 customer objektais

const customersArr: CustomerInterface[] = [
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
function allSums(arr: CustomerInterface[]): number {
  let total: number = 0;
  arr.forEach((cObj): void => {
    total += cObj.buySum;
  });
  console.log('total ===', total);

  return arr.reduce((total: number, cObj: CustomerInterface): number => total + cObj.buySum, 0);
}
const sumSum = allSums(customersArr);
console.log('sumSum ===', sumSum);

// 2. parasyti funkcija, kuri ima masyva kai argumenta
// grazina visu kiek yra vairuotoju

const allDrivers = (arr: CustomerInterface[]): number => {
  const drLen: number = arr.filter((cObj: CustomerInterface) => cObj.isDriver).length;
  console.log('drLen ===', drLen);
  return drLen;
};
allDrivers(customersArr);

// 3. parasyti funkcija, kuri ima masyva kai argumenta
// grazina visu customers vardus kaip masyvo elementus

// 4. parasyti funkcija, kuri ima masyva kai argumenta
// grazina visu customers vardus kaip kableliais atskirta stringa

// 5. parasyti funkcija, kuri ima masyva kai argumenta
// grazina visu customers amziu vidurki

// 6. parasyti funkcija, kuri ima masyva kai argumenta
// grazina masyva su objektais kuriuose yra vardas ir amzius

interface NameAgeInterface {
  name: string;
  age: number;
}

function getNameAge(arr: CustomerInterface[]): NameAgeInterface[] {
  return arr.map((cObj) => {
    return {
      name: cObj.name,
      age: cObj.age,
    };
  });
}

console.log('getNameAge(customersArr) ===', getNameAge(customersArr));
