
var start = new Date();
var hrstart = process.hrtime();

const check = (aCombination) => {

    var sItem = aCombination;//aCombination.join("");

    //var iRest1 = sItem[0] % 1;
    var iRest2 = (sItem[0] + sItem[1]) % 2;
    if (iRest2 !== 0)
        return false;
    var iRest3 = (sItem[0] + sItem[1] + sItem[2]) % 3;
    if (iRest3 !== 0)
        return false;
    var iRest4 = (sItem[0] + sItem[1] + sItem[2] + sItem[3]) % 4;
    if (iRest4 !== 0)
        return false;
    var iRest5 = (sItem[0] + sItem[1] + sItem[2] + sItem[3] + sItem[4]) % 5;
    if (iRest5 !== 0)
        return false;
    var iRest6 = (sItem[0] + sItem[1] + sItem[2] + sItem[3] + sItem[4] + sItem[5]) % 6;
    if (iRest6 !== 0)
        return false;
    var iRest7 = (sItem[0] + sItem[1] + sItem[2] + sItem[3] + sItem[4] + sItem[5] + sItem[6]) % 7;
    if (iRest7 !== 0)
        return false;
    var iRest8 = (sItem[0] + sItem[1] + sItem[2] + sItem[3] + sItem[4] + sItem[5] + sItem[6] + sItem[7]) % 8;
    if (iRest8 !== 0)
        return false;
    var iRest9 = (sItem[0] + sItem[1] + sItem[2] + sItem[3] + sItem[4] + sItem[5] + sItem[6] + sItem[7] + sItem[8]) % 9;
    if (iRest9 !== 0)
        return false;

    return true;
}


const str = "123456789";
const permute = (str = "") => {
    if (!!str.length && str.length < 2) {
        return str
    }
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (str.indexOf(char) != i)
            continue
        let remainder = str.slice(0, i) + str.slice(i + 1, str.length)
        for (let permutation of permute(remainder)) {

                arr.push(char + permutation)

        }
    }
    return arr
}
var aAllCombinations = permute(str);

// const permutator = (aInput) => {
//     let result = [];

//     const permute = (arr, m = []) => {
//         if (arr.length === 0) {

//             if (check(m)) {
//                 console.log(m.join(""));
//                 result.push(m);
//             }
//         } else {
//             for (let i = 0; i < arr.length; i++) {
//                 let curr = arr.slice();
//                 let next = curr.splice(i, 1);
//                 permute(curr.slice(), m.concat(next))
//             }
//         }
//     }

//     permute(aInput);

//     return result;
// }

//var aNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var aAllCombinations = permute(aNumbers);

var aResult = [];

for(var i = 0; i < aAllCombinations.length; i++) {
    if(check(aAllCombinations[i])) {
        aResult.push(aAllCombinations[i]);
    }
}

var end = new Date() - start;
var hrend = process.hrtime(hrstart);

console.info('Execution time: %dms', end)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

console.table(aResult);