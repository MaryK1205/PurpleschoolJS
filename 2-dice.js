let array = ['D4', 'D6', 'D8', 'D10', 'D12', 'D16', 'D20'];
function dice(array) {
    arrayRandom = [];
    for (let i = 0; i < array.length - 1; i++) {
        // let n = Number(array[i].replace('D', ''));
        arrayRandom.push(Math.floor(Math.random() * Number(array[i].replace('D', '')) + 1));

    }
    return arrayRandom;

}

console.log(dice(array));
