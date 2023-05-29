let slider_sections = document.querySelectorAll('.slider__section');
let slider_images = document.querySelectorAll('.slider__img');
let slider_headers = document.querySelectorAll('.slider__section-header-wrp');
let slider_mobileImagesWrap = document.querySelector('.slider__mobile-img-wrp');
let slider_ImagesWrap = document.querySelector('.slider__img-wrp');
let slider_Wrap = document.querySelector('.slider__wrp');
let arrSlid = [slider_sections, slider_images];
let currentSliderIndex = 0;
let counter = 0;
let x1 = null;
let y1 = null;
let x2 = null;
let y2 = null;

slider_headers.forEach((el, index) => {
	el.addEventListener('click', () => {
		if(index!==currentSliderIndex) {
			delActive(arrSlid, currentSliderIndex);
			slider_images[index].classList.add('active');
		}
		slider_sections[index].classList.toggle('active');
		currentSliderIndex = index;
	});
});

function delActive(paramArr, index) {
	paramArr.forEach(el => {
		el[index].classList.remove('active');
	})
}

function changeSlide() {
	let slideWidth = slider_ImagesWrap.offsetWidth;
	slider_mobileImagesWrap.style.transform = 'translateX(-'+slideWidth*counter+'px)';
}

changeSlide();

window.addEventListener('resize',changeSlide);

slider_Wrap.addEventListener('touchstart', (event) => {
	x1 = event.touches[0].clientX;
	console.log(x1,'x1');
	y1 = event.touches[0].clientY;
})

slider_Wrap.addEventListener('touchmove', (event) => {
	x2 = event.touches[0].clientX;
	y2 = event.touches[0].clientY;
})

slider_Wrap.addEventListener('touchend', (event) => {
	let diff = x1-x2;
	console.log(x2,'x2');
	console.log(diff,'diff');
	if(diff >= 100 && x2) {
		delActive(arrSlid, counter);
		counter++;
		if(counter >= slider_images.length) {
			counter = 0;
		}
		slider_sections[counter].classList.add('active');
		changeSlide();
	} else if (diff <= -100 && x2) {
		delActive(arrSlid, counter);
		counter--;
		if(counter < 0) {
			counter = slider_images.length - 1;
		}
		slider_sections[counter].classList.add('active');
		changeSlide();
	}
	x1 = null;
	x2 = null;
	y1 = null;
	y2 = null;
})