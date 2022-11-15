function row(n) {
    if(n === 0)
    {
        return true;
    }
    console.log(n);
    row(n-1);
}

row(5);

console.log('End of 1st task');

function sumTo(n) {
    if (n === 1)
    {
        return 1;
    }
    return n + sumTo(n-1);
}

console.log(sumTo(3), '- sumTo(3)');

function factorial(n) {
    if (n === 1)
    {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5), '- factorial(5)');

function flat(arr) {
    var flatedArr = [];
    for (var index = 0; index < arr.length; index++) {
        if(Array.isArray(arr[index]))
        {
            var subArr = flat(arr[index]);
            flatedArr = flatedArr.concat(subArr);
        }
        else {
            flatedArr.push(arr[index]);
        }
    }
    return flatedArr;
}

var inputArr = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];

console.log(inputArr, '- inputArr');

var outputArr = flat(inputArr);

console.log(outputArr, '- flated Array');