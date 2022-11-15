console.log('Hello!');

function fillArray(array, size) {
    for (var index = 0; index < size; index++) {
        array[index] = Math.round(Math.random()*100);
    }
    return array;
}

var emptyArr = [];

emptyArr = fillArray(emptyArr, 10);
console.log(emptyArr, ' - task 1');

function comparison(arr1, arr2) {
    var sum1 = 0;
    var sum2 = 0;
    for (var index = 0; index < arr1.length; index++) {
        if(!(arr1[index] === '') && !(arr1[index] === true) && !(arr1[index] === false))
        {
            if(!(isNaN(arr1[index]))) {
                // console.log(Number(arr1[index]));
                sum1 += Number(arr1[index]);
            }
        }
    }

    console.log(sum1, ' - sum1');

    for (var index = 0; index < arr2.length; index++) {
        if(!(arr2[index] === '') && !(arr2[index] === true) && !(arr2[index] === false))
        {
            if(!(isNaN(arr2[index]))) {
                // console.log(Number(arr2[index]));
                sum2 += Number(arr2[index]);
            }
        }
    }

    console.log(sum2, ' - sum2');

    if(sum2 > sum1)
    {
        return arr2;
    }
    else {
        return arr1;
    }
}

console.log(comparison([1,2,1,0,'',54,'3',true],['4','5',6,777,'228','fag']),' - task 2');

function doMath(a, znak, b) {
    if (znak === '+')
    {
        return a + b;
    }
    else if (znak === '-')
    {
        return a - b;
    }
    else if (znak === '*')
    {
        return a * b;
    }
    else if (znak === '/')
    {
        return a / b;
    }
    else if (znak === '%')
    {
        return a % b;
    }
    else if (znak === '^')
    {
        return Math.pow(a, b);
    }
    else {
        return 'Invalid znak!'
    }
}

console.log(doMath(5,'^',5), ' - task 3');

function castrate(stroka,virezat) {
    for (var index = 0; index < virezat.length; index++) {
        stroka = stroka.split(virezat[index]).join('');
    }
    
    return stroka;
}

console.log(castrate('Hellow lalalalaallallala alall al la magakaka!',['l','a',' ']));