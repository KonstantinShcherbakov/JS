const counters = document.querySelectorAll('.counter');
const clickButtons = document.querySelectorAll('.counter-button');
const clearBtn = document.querySelector('.clear-btn');

for (let index = 0; index < counters.length; index++) {
	if(localStorage.getItem(`counter${index}`)===null){
		localStorage.setItem(`counter${index}`,counters[index].innerHTML);
	}
	else {
		counters[index].innerHTML=localStorage.getItem(`counter${index}`);
	}
	clickButtons[index].addEventListener('click',function(){
		counters[index].innerHTML=counters[index].innerHTML*1+1;
		localStorage.setItem(`counter${index}`,counters[index].innerHTML);
	})
}

clearBtn.addEventListener('click', function(){
	for(let index = 0; index < counters.length; index++) {
		counters[index].innerHTML=0;
		localStorage.setItem(`counter${index}`,counters[index].innerHTML);
	}
})

const setButtons = document.querySelectorAll('.set-button');
const main = document.querySelector('main');
const popupWrap = document.querySelector('.popup-wrp');
const closePopupBtn = document.querySelector('.close-btn');
const confirmPopupBtn = document.querySelector('.confirm-btn');
const number = document.querySelector('.counter-number');

for (let index = 0; index < counters.length; index++) {
	setButtons[index].addEventListener('click',function(){
		main.style.filter = 'blur(1px)';
		number.value = counters[index].innerHTML;
		popupWrap.style.visibility = 'visible';
		confirmPopupBtn.setAttribute('counter', index);
	});
}

confirmPopupBtn.addEventListener('click',function(){
	let counter = this.getAttribute('counter');
	counters[counter].innerHTML = number.value;
	localStorage.setItem(`counter${counter}`,number.value);
	closePopup();
})

function closePopup() {
	main.style.filter = 'none';
	popupWrap.style.visibility = 'hidden';
}

function closePopupEmptySpace() {
	if(event.target===popupWrap) {
		main.style.filter = 'none';
		popupWrap.style.visibility = 'hidden';
	}
}

closePopupBtn.addEventListener('click',closePopup);
popupWrap.addEventListener('click',closePopupEmptySpace);