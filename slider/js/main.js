let counter = 0;

const buttons = document.querySelectorAll('.btn');
const slides = document.querySelectorAll('.slider-wrp');
const container = document.querySelector('.container');
const dots = document.querySelector('.dots');

container.style.transform = `translateX(${-(1920-window.innerWidth)/2}px)`;

for (let index = 0; index < slides.length; index++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dot.setAttribute('data-index', index);
	dot.addEventListener('click', function(){
		dotsSet[counter].classList.toggle('current');
		counter = dot.getAttribute('data-index');
		container.style.transform = `translateX(${-(1920*counter)-((1920-window.innerWidth)/2)}px)`;
		dotsSet[counter].classList.toggle('current');
	});
	dots.appendChild(dot);
}

const dotsSet = document.querySelectorAll('.dot');

dotsSet[0].classList.toggle('current');

function changeSlide(direction) {
	if(direction) {
		dotsSet[counter].classList.toggle('current');
		counter++;
		if(counter>(slides.length-1)) {
			counter=0;
		}
		dotsSet[counter].classList.toggle('current');
	}
	else {
		dotsSet[counter].classList.toggle('current');
		counter--;
		if(counter<0)
		{
			counter=(slides.length-1);
		}
		dotsSet[counter].classList.toggle('current');
	}
	container.style.transform = `translateX(${-(1920*counter)-((1920-window.innerWidth)/2)}px)`;
}

buttons.forEach(function pickDirection(el, index) {
	if(index === 0) {
		el.addEventListener('click', function() {
			changeSlide(false);
		} )
	}
	else {
		el.addEventListener('click', function() {
			changeSlide(true);
		} )
	}
});

function onResize() {
	container.style.transform = `translateX(${-(1920*counter)-((1920-window.innerWidth)/2)}px)`;
}

window.addEventListener("resize", onResize)

setInterval(changeSlide,5000,true);

const popupBtn = document.querySelector('.open-popup');
const main = document.querySelector('main');
const popupWrap = document.querySelector('.popup-wrp');
const closePopupBtn = document.querySelector('.close-btn');

function openPopup() {
	main.style.filter = 'blur(3px)';
	popupWrap.style.visibility = 'visible';
}

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
popupBtn.addEventListener('click',openPopup);
popupWrap.addEventListener('click',closePopupEmptySpace);