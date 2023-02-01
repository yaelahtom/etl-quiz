const arr = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20];
const half = arr.length / 2
const otherHalf = arr.slice(0, half / 2)
const theOtherHalf = arr.slice(10,15)

const result = otherHalf.map((value, index) => `${value} -> ${arr[arr.length / 2 - 1 - index]} -> ${value}`);

const resultt = theOtherHalf.map((value, index) => `${value} -> ${arr[arr.length - index - 1]} -> ${arr[arr.length / 2 - index - 1]}`);


console.log(result.join("\n"))
console.log(resultt.join("\n"))


// 1 -> 10 -> 1
// 2 -> 9 -> 2
// 3 -> 8 -> 3
// 4 -> 7 -> 4
// 6 -> 5 -> 6
// 11 -> 20 -> 10
// 13 -> 19 -> 9
// 12 -> 18 -> 8
// 14 -> 17 -> 7
// 15 -> 16 -> 5
