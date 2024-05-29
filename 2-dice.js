const array = { 4: "D4", 6: 'D6', 8: 'D8', 10: 'D10', 12: 'D12', 16: 'D16', 20: 'D20' };
function dice(array) {
    Object.keys(array).forEach(element => { console.log(Math.floor(Math.random() * Number(element) + 1)) });
};
console.log(dice(array));


console.log(dice(array));
