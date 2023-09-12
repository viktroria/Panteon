$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		touchMove: false,
		infinite: true,
		variableWidth: true,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:3,
					variableWidth: false,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:2,
					arrows: false
				}
			}
		]
	});
	$('.sliderbig').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		touchMove: false,
		infinite: true,
		variableWidth: true,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:2,
					arrows: false
				}
			},
			// {
			// 	breakpoint: 425,
			// 	settings: {
			// 		slidesToShow:2,
			// 		arrows: false,
			// 	}
			// }
		]
	});
	$('.slider_coach').slick({
		arrows:true,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		touchMove: false,
		infinite: true,
		variableWidth: true,
		appendArrows: $('.arrow'),
		prevArrow: "<img src='./iconsFont/bi_arrow-left.svg' class='prev' alt='1'>",
    	nextArrow: "<img src='./iconsFont/bi_arrow-right.svg' class='prev' class='next' alt='2'>",

		responsive:[
			{
				breakpoint: 1440,
				settings: {
					slidesToShow:2,
					// arrows:false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:2,
					// arrows:false,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

