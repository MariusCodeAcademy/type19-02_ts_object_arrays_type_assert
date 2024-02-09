"use strict";
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }
function addName(obj, str, val) {
    const newObj = Object.assign(Object.assign({}, obj), { [str]: val });
    console.log('newObj ===', newObj);
    return newObj;
}
addName({}, 'Brutus', 300);
addName({ piano: 500 }, 'Brutus', 300);
//# sourceMappingURL=pr.js.map