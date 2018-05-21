
var clickCount = 0;
var clickCountElem = document.getElementById('click-count');
var catImgElem = document.getElementById('cat-img');

catImgElem.addEventListener('click', function () {

	clickCount+=1;
	clickCountElem.textContent = clickCount;
});


var clickCount02 = 0;
var clickCountElem02 = document.getElementById('click-count02');
var catImgElem02 = document.getElementById('cat-img02');

catImgElem02.addEventListener('click', function () {

	clickCount02 += 1;
	clickCountElem02.textContent = clickCount02;
});