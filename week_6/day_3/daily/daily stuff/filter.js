// const getEvens = function(numbers){
//     const evenNumbers = [];

//     numbers.forEach((number) =>{
//         if (number %2 === 0) {
//             evenNumbers.push(number)};
//     })
//     return evenNumbers;
// };

// console.log("these were all the numbers", allNumbers);
// console.log("these are all the even numbers", getEvens(allNumbers));


const getEvens = function(arrayOfNums) {
    const evenNumbers = arrayOfNums.filter((number) => {
        return number % 2 === 0;
    });
    return evenNumbers
}

const numbers =[23, 34, 45, 56, 66, 88, 78, 99];

console.log('these are all the even numbers', getEvens(numbers));


const getUneven = function(arrayOfNums) {
    const unevenNumbers =arrayOfNums.filter((number) =>
    {
        return number %2 !== 0;
    });

    return unevenNumbers
}

console.log('these are the uneven numbers,' , getUneven(numbers))