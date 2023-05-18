let slider_sections = document.querySelectorAll('.slider__section');
let slider_images = document.querySelectorAll('.slider__img');
let currentSliderIndex = 0;

console.log(slider_sections);

// function changeSlide(event,index) {
// 	if(index!==currentSliderIndex) {
// 		slider_sections[currentSliderIndex].classList.remove('slider__section-active');
// 		slider_images[currentSliderIndex].classList.remove('slider__active-img');
// 		slider_images[index].classList.add('active');
// 	}
// 	slider_sections[index].classList.toggle('slider__section-active');
// 	currentSliderIndex = index;
// 	return
// }

// for (let index = 0; index < slider_sections.length; index++) {
// 	slider_sections[index].addEventListener('click', function(){changeSlide(event,index)})
// }

slider_sections.forEach((el, index) => {
	el.addEventListener('click', () => {
		if(index!==currentSliderIndex) {
			slider_sections[currentSliderIndex].classList.remove('slider__section-active');
			slider_images[currentSliderIndex].classList.remove('slider__active-img');
			slider_images[index].classList.add('slider__active-img');
		}
		slider_sections[index].classList.toggle('slider__section-active');
		currentSliderIndex = index;
	});
});