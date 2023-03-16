let range = document.getElementById('range');

let number = document.getElementById('number');

let comission = document.getElementById('comission');

let money = document.getElementById('money');

function changeDimensions (height) {
	money.style.height = height*2 + 'px';
	if( height < 20 ) {
		comission.style.height = Math.ceil(height/100*2)*2 + 'px';
	}
	else if (height >= 20 && height <= 50) {
		comission.style.height = Math.ceil(height/100*4)*2 + 'px';
	}
	else if (height > 50 && height <= 75) {
		comission.style.height = Math.ceil(height/100*6)*2 + 'px';
	}
	else {
		comission.style.height = Math.ceil(height/100*8)*2 + 'px';
	}
}

number.value = range.value;
changeDimensions(range.value);

range.onchange = function () {
	number.value = range.value;
	changeDimensions(range.value);
}

number.onchange = function () {
	range.value = number.value;
	changeDimensions(number.value);
}