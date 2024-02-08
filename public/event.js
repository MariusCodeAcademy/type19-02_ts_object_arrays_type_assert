"use strict";
// type assertion
const inputField = document.querySelector('#input');
const result = document.querySelector('#result');
console.log('inputField ===', inputField);
console.log('result ===', result);
const num = 5;
if (inputField === null)
    throw new Error('Neteisingas įvesties lauko selektorius');
if (result === null)
    throw new Error('Neteisingas rezultatų konteinerio selektorius');
const handleFieldChange = (event) => {
    const element = event.target;
    if (element === null)
        return;
    result.textContent = element.value;
};
inputField.addEventListener('keyup', handleFieldChange);
//# sourceMappingURL=event.js.map