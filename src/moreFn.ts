// more abou functions
// https://www.typescriptlang.org/docs/handbook/2/functions.html

// pasakom kad sum turetu tureti 2 skaiciau tipo argumentus ir grazinti skaiciu
interface MathFuntion {
  (num1: number, num2: number): number;
}

const sum: MathFuntion = function (x: number, y: number): number {
  const rez = x + y;
  console.log('rez ===', rez);
  return rez;
};

const minus: MathFuntion = function (x, y) {
  const rez = x - y;
  console.log('rez ===', rez);
  return rez;
};

const mulitply: MathFuntion = function (x, y) {
  const rez = x * y;
  console.log('rez ===', rez);
};
