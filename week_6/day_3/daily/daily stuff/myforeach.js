const myForEach = function(array, callback) {
    for (const element of array) {
        callback(element);
    }
};

const numbers = [1,3,6,7,8,9];

const myCallBack = (element) => {
    console.log(`My element was: ${element}` );
}

// this:
myForEach(numbers, myCallBack);
// is the equivalent to:
// numbers.forEach(myCallBack)