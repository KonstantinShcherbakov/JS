var inputObj = { a: 10, b: 12, c: { f: 13, g: { m: 20} } };

console.log('Task 1 --------');
console.log('Obj before task 1');
console.log(inputObj);

function convert(obj) {
    var flatedObj =  {};
    for(key in obj) {
        if(typeof(obj[key]) === 'object')
        {
            buffObj = convert(obj[key]);
            for(item in buffObj)
            {
                flatedObj[item] = buffObj[item];
            }
        }
        else {
            flatedObj[key] = obj[key];
        }
    }
    return flatedObj;
}

inputObj = convert(inputObj);

console.log('Obj after task 1');
console.log(inputObj);

function assignObjects() {
    var assigned = arguments[0];

    if (arguments.length > 1) {
        for (var index = 1; index < arguments.length; index++) {
            for (key in arguments[index]) {
                assigned[key] = arguments[index][key];
            }            
        }
    }

    return assigned;
}

console.log('Task 2 --------');

var test = assignObjects({ x: 10 }, { x: 20, y: 30 }, { z: 30 }, { c: 577, x: 228});

console.log(test);