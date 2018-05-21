
var model = {
	names: ['cat01', 'cat02', 'cat03', 'cat04', 'cat05'],
	imgSrc: ['images/cat01.jpg', 'images/cat02.jpg', 'images/cat03.jpg', 'images/cat04.jpg', 'images/cat05.jpg']
}


var clickCount = 0;
var clickCountElem = document.getElementById('click-count');
var catImgElem = document.getElementById('cat-img');
var catListElem = document.getElementById('cat-list');
var catNameElem = document.getElementById('cat-name');
var catClickCountElem = document.getElementById('click-count');

model.names.map(name => {
	var elem = document.createElement('li');
	elem.textContent = name;
	elem.addEventListener('click', () => {
		catNameElem.textContent = name;
	})

	catListElem.appendChild(elem);

	
	
})





