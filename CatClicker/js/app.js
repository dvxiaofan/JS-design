var initialCats = [
	{
		name: 'cat01',
		clickCount: 0,
		imgSrc: 'images/cat01.jpg',
		imgAttribution: '',
		nickname: 'nickname01'
	}, {
		name: 'cat02',
		clickCount: 0,
		imgSrc: 'images/cat02.jpg',
		imgAttribution: '',
		nickname: 'nickname02'
	}, {
		name: 'cat03',
		clickCount: 0,
		imgSrc: 'images/cat03.jpg',
		imgAttribution: '',
		nickname: 'nickname03'
	}, {
		name: 'cat04',
		clickCount: 0,
		imgSrc: 'images/cat04.jpg',
		imgAttribution: '',
		nickname: 'nickname04'
	}, {
		name: 'cat05',
		clickCount: 0,
		imgSrc: 'images/cat05.jpg',
		imgAttribution: '',
		nickname: 'nickname05'
	}
];

var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickname = ko.observable(data.nickname);

	this.title = ko.computed(() => {
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'go 10';
		} else if (clicks < 50) {
			title = 'go 50';
		} else if (clicks < 100) {
			title = 'go 100';
		} else if (clicks < 200) {
			title = 'go 200';
		} else if (clicks < 500) {
			title = 'go 500';
		} else {
			title = 'xiaofan';
		}
		return title;
	}, this);

}

var ViewModel = function () {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach((catItem) => {
		self.catList.push(new Cat(catItem));
	})

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function () {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = (clickCat) => {
		self.currentCat(clickCat)
	}
}

// 激活ko
ko.applyBindings(new ViewModel());

