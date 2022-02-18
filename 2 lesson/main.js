// function printArrayValues(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(arr[i], 'array');
// 	}
// }

// printArrayValues([1, 2, 3]);

// function printArrayValues(arr) {
//     if(arr == 1){
//         return arr
//     } else{
//         return arr * printArrayValues(arr, 'array')
//     }
// };

// printArrayValues([1, 2, 3]);


function printArrayValues(arr) {
    console.log(arr[0], 'array')
    if(arr.length > 1)
        printArrayValues(arr.slice(1))  
}
printArrayValues([1, 2, 3]);