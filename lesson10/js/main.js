function renderObject() {
	console.log(Object.keys(this));
	for (var index = 0; index < Object.keys(this).length; index++) {
		if(Object.keys(this)[index] != "renderObject")
		{
			console.log(Object.keys(this)[index] + ': ' + this[Object.keys(this)[index]]);
		}
	}
}

var obj = {
	x: 10,
	y: 15,
	z: 'gay',
	f: function() {
		console.log('pepe');
	}
}

obj.renderObject = renderObject;

console.log("1 task\n---------------------------------------------");

obj.renderObject();

console.log("---------------------------------------------");

var obj2 = {
	text: 'its me',
	m1: function() {
		console.log('m1 ' + this.text);
		return this;
	},
	m2: function() {
		console.log('m2');
		return this;
	}
}

console.log("2 task\n---------------------------------------------");

obj2.m1();
obj2.m2();

obj2.m1().m2();

obj2.m2().m1();

console.log("---------------------------------------------");

console.log("3 task\n---------------------------------------------");

function addRecord() {
	var argumentsLenght;
	var flag = false;
	if(typeof(arguments[arguments.length-1])==='boolean') {
		argumentsLenght = arguments.length - 1;
		flag = arguments[arguments.length-1];
	}
	else {
		argumentsLenght = arguments.length;
	}
	for (var i = 0; i < argumentsLenght; i++) {
		for (var j = 0; j < Object.keys(arguments[i]).length; j++) {
			if(!(flag&&this.hasOwnProperty(Object.keys(arguments[i])[j]))) {
				this[Object.keys(arguments[i])[j]] = arguments[i][Object.keys(arguments[i])[j]];
			}
		}
	}
	console.log(this);
}

data = {
	addRecord: addRecord,
}

data.addRecord({x: 'y',jojo: 5},{papa: 43, x: 53},{papa: 'mama'},true);

console.log("---------------------------------------------");