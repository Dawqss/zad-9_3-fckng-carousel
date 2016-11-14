$(function(){
	var $carouselList = $('#carousel ul');
	$carouselList.css({marginLeft: -400});
	var i = 0;
	var photos = ['#one', '#two', '#three', '#four', '#five'];

	photos.forEach(function(photo, index) {
		$(photo).click(function() {
			console.log(index);
		});
	});

	$(photos[i]).removeClass('fa-circle-thin').addClass('fa-circle');

	function checkCounter(){
		if (i === 5) {
			i = 0
		} else if (i === -1) {
			i = 4;
		}
	};

	function changeDots(){
		checkCounter();
		photos.forEach(function(photo) {
			$(photo).removeClass('fa-circle').addClass('fa-circle-thin');
		});
		$(photos[i]).removeClass('fa-circle-thin').addClass('fa-circle');
	};

	function changeSlideLeft(){
		$carouselList.animate({'marginLeft': -800}, 500, moveFirstSlide);
	};

	function changeSlideRight(){
		$carouselList.animate({'marginLeft': +0}, 500, moveLastSlide);
	};

	var interval = setInterval(changeSlideLeft, 3000);

	function moveLastSlide(){
		var $firstItem = $carouselList.find('li:first');
		var $lastItem = $carouselList.find('li:last');
		$firstItem.before($lastItem);
		$carouselList.css({marginLeft: -400});
	 	i--;
		changeDots();
	};

	function moveFirstSlide(){
		var $firstItem = $carouselList.find('li:first');
		var $lastItem = $carouselList.find('li:last');
		$lastItem.after($firstItem);
		$carouselList.css({marginLeft: -400});
		i++
		changeDots();
	};

	function resetInterval() {
		clearInterval(interval);
		interval = setInterval(changeSlideLeft, 3000);
	}

	$('#right').click(function() {
		changeSlideLeft();
		resetInterval();
	});
	$('#left').click(function() {
		changeSlideRight();
		resetInterval();
	});
});





