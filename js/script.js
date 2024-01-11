//burger menu

window.onload = () => {

	$(document).ready(function () {
		const header = $('.header__burger,.header__menu,.header');

		$('.header__burger').click(function (event) {
			header.toggleClass('active');
			$('body').toggleClass('lock');
		});

		$('.header__link').click(() => {
			if (header.hasClass('active')) {
				header.toggleClass('active');
				$('body').toggleClass('lock');
			}
		});

	});



	//animation-text
	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		setTimeout(() => {
			animOnScroll();
		}, 500);
	}


	//     TABS

	const tabNavItems = document.querySelectorAll('.servises__item-subtitle');
	const tabItems = document.querySelectorAll('.servises__list');
	document.addEventListener("click", function (e) {
		const targetElement = e.target;
		let currentActiveIndex = null;
		let newActiveIndex = null;
		if (targetElement.closest('.servises__item-subtitle')) {
			tabNavItems.forEach((tabNavItems, index) => {
				if (tabNavItems.classList.contains('active')) {
					currentActiveIndex = index;
					tabNavItems.classList.remove('active');
				}
				if (tabNavItems === targetElement) {
					newActiveIndex = index;
				}
			});
			targetElement.classList.add('active');
			tabItems[currentActiveIndex].classList.remove('active');
			tabItems[newActiveIndex].classList.add('active');
		}
	});




	//slider main
	var slideIndex = 0;
	showSlides();

	function showSlides() {
		var i;
		var slides = document.getElementsByClassName("carousel-item");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > slides.length) { slideIndex = 1 }
		slides[slideIndex - 1].style.display = "block";
		setTimeout(showSlides, 5000); // Задержка между слайдами в миллисекундах
	}


	// slider for review
	var reviewSwiper = new Swiper(".review__slider-content", {
		slidesPerView: 3,
		spaceBetween: 25,
		centerSlide: true,
		fade: true,
		grabCursor: true,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			520: {
				slidesPerView: 2,
			},
			950: {
				slidesPerView: 3,
			},
		},
	});

	// slider for NEWS
	var newsSwiper = new Swiper(".news__slider-content", {
		slidesPerView: 3,
		spaceBetween: 25,
		centerSlide: true,
		fade: true,
		grabCursor: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			520: {
				slidesPerView: 2,
			},
			950: {
				slidesPerView: 3,
			},
		},
	});



}