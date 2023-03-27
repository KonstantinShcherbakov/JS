let prev = document.getElementById('prev');
let next = document.getElementById('next');
let container = document.getElementById('container');
let counter = 0;

let slides = document.getElementsByClassName('slider-wrp');

function onResize() {
	container.style.transform = `translateX(${-window.innerWidth*counter}px)`;
}

function nextSlide() {
	counter++;
	if(counter>(slides.length-1))
	{
		counter=0;
	}
	container.style.transform = `translateX(${-window.innerWidth*counter}px)`;
}

function prevSlide() {
	counter--;
	if(counter<0)
	{
		counter=(slides.length-1);
	}
	container.style.transform = `translateX(${-window.innerWidth*counter}px)`;
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
window.addEventListener("resize", onResize)