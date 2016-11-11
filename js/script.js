$(function(){

var $carouselList = $('#carousel ul');
$carouselList.css({marginLeft: -400});
var i = 0;
var photos = ['#one', '#two', '#three', '#four', '#five'];
$(photos[i]).removeClass('fa-circle-thin').addClass('fa-circle');


function checkCounter(){
	if (i == 5) {
		i = 0
	} else if (i == -1) {
		i = 4;
	}
};	



function changeDots(){
	var photos = ['#one', '#two', '#three', '#four', '#five'];
	$(photos[i - 1]).removeClass('fa-circle').addClass('fa-circle-thin');
	$(photos[i + 1]).removeClass('fa-circle').addClass('fa-circle-thin');
	$(photos[i]).removeClass('fa-circle-thin').addClass('fa-circle');
	checkCounter();
};
	

function changeSlideLeft(){
	$carouselList.animate({'marginLeft': -800}, 500, moveFirstSlide);
};

function changeSlideRight(){
	$carouselList.animate({'marginLeft': +0}, 500, moveLastSlide);
};

setInterval(changeSlideLeft, 3000);

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

$('#right').click(changeSlideRight);
$('#left').click(changeSlideLeft);

});





