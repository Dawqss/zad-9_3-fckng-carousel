$(function(){
	var $carouselList = $('#carousel ul'),
		i = 0,
		diff = 0,
		diffNegative = 0,
		holder,
		photos = ['#one', '#two', '#three', '#four', '#five'],
		interval = setInterval(changeSlideLeft, 3000);

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
			console.log('i :' +i)
			console.log('holder : ' +holder);
			console.log('diff : ' +diff);
			console.log('diffAbs : ' +diffAbs);
			if ((diff > -3) && (diff < 0)) {
				repeatSlideLeft(diffAbs);
				console.log('1: ' +diffAbs);
			} else if ((diff > 0) && (diff < 3)) {
				repeatSlideRight(diff);
				console.log('2: ' +diff);
			} else if ((diff > -5) && (diff < 0)) {
				repeatSlideRight(diff + 5);
				console.log('3: ' +(diff + 5));
			} else if ((diff > 0) && (diff < 5)) {
				repeatSlideLeft(5 - diff);
				console.log('4: ' +(5 - diff));
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

});





