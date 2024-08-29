const arr = [2, 4, [22, "test"], null, false, { a: 2 }, [22, "test"], "null"];
const uniq = arr.map((name) => {
    return {
        count: 1,
        name: name
    };
}).reduce((result, b) => {
    result[b.name] = (result[b.name] || 0) + b.count;
    return result;
}, {});
const duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1);

console.log(duplicates);

console.log(typeof duplicates[0]); //string
console.log(typeof duplicates[1]); //string
///////////////////////////////////////////////////////////////////////////////
// const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl'];
// let num = [9, 9, 111, 2, 3, 4, 4, 5, 7];
// function findDuplicates(arr) {
//     let sorted_arr = arr.slice().sort();
//     let results = [];
//     for (let i = 0; i < sorted_arr.length - 1; i++) {
//         if (sorted_arr[i + 1] == sorted_arr[i]) {
//             results.push(sorted_arr[i]);
//         }
//     }
//     return results;
// }
// ;
// console.log(findDuplicates(names));
// console.log(findDuplicates(num));
// console.log(findDuplicates(arr));


// // Does not detect all data Types.
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// De-structure Array
const array = [
    8,
    "55",
    [2, "Hello World", { a: 2, b: 5 }, false],
    {
        arr: [true, 1, NaN, new Array(2, 33)],
        test: null,
        obj: { d: "Mona", last: [2, false, undefined] }
    }]

const [, , , { arr: [d, e, f, [g, h]], t, obj: { d: i, last: [j, k, l] } }] = array;

console.log(h, i);
//////////////////////////////////////////////////////////////////////////