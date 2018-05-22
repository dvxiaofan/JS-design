
/* === model === */
var model = {
	currtenCat: null,
	cats: [
		{
			name: 'cat01',
			clickCount: 0,
			imgSrc: 'images/cat01.jpg'
		}, {
			name: 'cat02',
			clickCount: 0,
			imgSrc: 'images/cat02.jpg'
		}, {
			name: 'cat03',
			clickCount: 0,
			imgSrc: 'images/cat03.jpg'
		}, {
			name: 'cat04',
			clickCount: 0,
			imgSrc: 'images/cat04.jpg'
		}, {
			name: 'cat05',
			clickCount: 0,
			imgSrc: 'images/cat05.jpg'
		}
	]
};

/* === View === */

var catListView = {
	init: function () {
		this.catListElem = document.getElementById('cat-list');

		this.render();
	},

	render: function () {
		var cats = controller.getCats();

		// 清空猫列表
		this.catListElem.innerHTML = '';
		var elem;
		cats.map(cat => {
			elem = document.createElement('li');
			elem.textContent = cat.name;

			// 给catview添加点击事件， 增加计数器
			elem.addEventListener('click', (function (catCopy) {
				return function () {
					controller.setCurrentCat(catCopy);

					catView.render();
				}
			})(cat));

			this.catListElem.appendChild(elem);
		});
	}
};

var catView = {
	init: function () {
		// 存储 DOM 元素以便稍后访问
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catCountElem = document.getElementById('cat-count');
		this.catImgElem = document.getElementById('cat-img');

		// 点击后，增加当前猫的计数器
		this.catImgElem.addEventListener('click', function () {
			controller.incrementCounter();
		});

		// 渲染此视图（用正确的值更新 DOM 元素）
		this.render();
	},

	render: function () {
		// 使用当前 cat 的值更新 DOM 元素
		var currtenCat = controller.getCurrentCat();
		this.catNameElem.textContent = currtenCat.name;
		this.catCountElem.textContent = currtenCat.clickCount;
		this.catImgElem.src = currtenCat.imgSrc;
	}
};

/* === controller === */
var controller = {
	init: function () {
		model.currtenCat = model.cats[0];

		catListView.init();
		catView.init();
	},

	getCurrentCat: function () {
		return model.currtenCat;
	},

	getCats: function () {
		return model.cats;
	},

	setCurrentCat: function (cat) {
		model.currtenCat = cat;
	},

	incrementCounter: function () {
		model.currtenCat.clickCount++;
		catView.render();
	}
};

controller.init();

