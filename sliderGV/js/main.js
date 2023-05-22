let slider_sections = document.querySelectorAll('.slider__section');
let slider_images = document.querySelectorAll('.slider__img');
let slider_headers = document.querySelectorAll('.slider__section-header-wrp');
let arrSlid = [slider_sections, slider_images];
let currentSliderIndex = 0;

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