// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

interface ArgObjIf {}

function addName(obj: {}, str: string, val: number): {} {
  const newObj = {
    ...obj,
    [str]: val,
  };
  console.log('newObj ===', newObj);
  return newObj;
}
addName({}, 'Brutus', 300);
addName({ piano: 500 }, 'Brutus', 300);
