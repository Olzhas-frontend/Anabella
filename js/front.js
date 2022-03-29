import { G_Bus } from './libs/G_Control.js';
import { Modaler } from './libs/Modaler.lib.js';
import G_G from './libs/G_G.js';
import * as swiper from '../libs/swiper.js';
export default class Front extends G_G {
	constructor() {
		super();
		const _ = this;
		G_Bus.on('createOrderSuccess', _.createOrderSuccess.bind(_))
			.on('createOrderFail', _.createOrderFail.bind(_))
			.on('burger', _.burger.bind(_));
	}
	createOrderSuccess(orderData) {}
	createOrderFail(orderData) {}
	burger(clickData) {
		const button = clickData.item;
		const body = document.querySelector('body');
		const menu = document.querySelector('.menu');
		button.classList.toggle('is-active');
		body.classList.toggle('no-scroll');
		menu.classList.toggle('active');
	}
	fixedHeaderOnScroll() {
		const header = document.querySelector('.header');
		if (window.pageYOffset > 0) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	}
	define() {}
	init() {
		const _ = this;
		window.addEventListener('scroll', () => {
			_.fixedHeaderOnScroll();
		});
		_.fixedHeaderOnScroll();
	}
}
new Front();

const heroSlider = new Swiper('.hero-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 1,
	autoHeight: true,
});

const portfolioSlider = new Swiper('.portfolio-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});
