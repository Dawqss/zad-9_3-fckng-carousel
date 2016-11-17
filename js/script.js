//$(function(){
	var $carouselList = $('#carousel ul'),
		i = 0,
		diff = 0,
		diffNegative = 0,
		holder,
		photos = ['#one', '#two', '#three', '#four', '#five', 'six', 'seven'],
		interval = setInterval(changeSlideLeft, 3000),
		ulLength = $('li').length;
		negativeHalfPlusOne = -(Math.floor(ulLength / 2)+1),
		HalfPlusOne = (Math.floor(ulLength / 2)+1),
		negativeUlLength = -(ulLength);

	$carouselList.css({marginLeft: -400});
	$(photos[i]).removeClass('fa-circle-thin').addClass('fa-circle');
	$('#right').click(function() {
		changeSlideLeft();
		resetInterval();
	});
	$('#left').click(function() {
		changeSlideRight();
		resetInterval();
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 39) {
			changeSlideLeft();
			resetInterval();
		} else if (e.keyCode === 37) {
			changeSlideRight();
			resetInterval();
		};
    });

    photos.forEach(function(photo, index) {
		$(photo).click(function() {
			holder = index;
			diff = i - holder;
			diffAbs = Math.abs(diff);
				if ((diff > negativeHalfPlusOne) && (diff < 0)) {
				repeatSlideLeft(diffAbs);
			} else if ((diff > 0) && (diff < HalfPlusOne)) {
				repeatSlideRight(diff);
			} else if ((diff > negativeUlLength) && (diff < 0)) {
				repeatSlideRight(diff + ulLength);
			} else if ((diff > 0) && (diff < 5)) {
				repeatSlideLeft(ulLength - diff);
			};
		});
	});

	function repeatSlideLeft(count) {
		for (var z = 0; z < count; z++) {
			changeSlideLeft();
			resetInterval();
		};
	};
	function repeatSlideRight(count) {
		for (var z = 0; z < count; z++) {
			changeSlideRight();
			resetInterval();
		};
	}

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

//});





