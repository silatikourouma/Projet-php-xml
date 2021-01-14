let containerSwiperWrapper = document.createElement('div');
containerSwiperWrapper.classList.add('swiper-wrapper');

let imgsContainers = document.querySelectorAll('.img');
if (imgsContainers.length !== 0) {
	let gallery_box_single = document.querySelector('.gallery_box_single');
	gallery_box_single.classList.add('swiper-container');

	// Append container Wrapper dans galleryBox
	gallery_box_single.appendChild(containerSwiperWrapper);

	//Déplacer les image dans le container
	imgsContainers.forEach((imgContainer) => {
		imgContainer.classList.add('swiper-slide');
		let imgChildren = imgContainer.querySelector('img');
		let src = imgChildren.getAttribute('src');
		imgContainer.setAttribute('style', 'background-image: url(./' + src + ')');
		containerSwiperWrapper.appendChild(imgContainer);
		imgContainer.removeChild(imgChildren);
	});
	let swiperPagination = document.createElement('div');
	swiperPagination.classList.add('swiper-pagination');
	gallery_box_single.insertAdjacentElement('beforeend', swiperPagination);
}

let h1 = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
h1.forEach((title) => {
	title.setAttribute('data-aos', 'fade-right');
});

let textElements = document.querySelectorAll('p:not(.caption-text), li');
textElements.forEach((element) => {
	element.setAttribute('data-aos', 'zoom-out-down');
});
let video = document.querySelector('iframe');
if (video !== null) {
	video.setAttribute('data-aos', 'flip-up');
}
let form = document.querySelector('div[role="form"]');
if (form !== null) {
	form.setAttribute('data-aos', 'fade-down');
}
// Init Animation
AOS.init({
	delay: 250,
});
