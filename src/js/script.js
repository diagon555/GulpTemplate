function testWebP() {
	return new Promise(res => {
		const webP = new Image();
		webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
		webP.onload = webP.onerror = function () {
			res(webP.height === 2);
		};
	})
};
testWebP()
	.then(function(){
		document.querySelector('body').classList.add('webp');
	})

$('.navigation__burger').on('click', function(e){
    $('.navigation__burger').toggleClass('navigation__burger-active');
    $('.navigation__container').toggleClass('navigation__container-active');
    return false;
});

$(document).on('click', function(e){
    $('.navigation__burger').removeClass('navigation__burger-active');
    $('.navigation__container').removeClass('navigation__container-active');
});
