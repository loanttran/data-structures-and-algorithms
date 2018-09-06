/* write a function that check if all values in an array
    have their squared values in another array */

// naive solution
// Time complexity = O(n^2) 
function same(arr1, arr2) {
    // check if the 2 arrs are of the same length
    if (arr1.length !== arr2.length) {
        return false;

    } 
    // check if every val in arr1 has its squared val in arr2
    for (let i=0; i<arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        // remove the val from arr2 that has it corresponding val in arr1
        arr2.splice(correctIndex, 1);  
    }
    return true;
}


// refactored
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }   
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        // check if there is a squared val
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // check if there is enough squared val
        if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true; 
}

// Time complexity: O(3n) --> 0(n)
// The idea behind frequency counter is to use an object

same([1,2,3,2,5], [9,1,4,4,11]);
