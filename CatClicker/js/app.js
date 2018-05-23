var viewModel = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('cat01');
	this.imgSrc = ko.observable('images/cat01.jpg');
	this.imgAttribution = ko.observable('');
	this.nicknames = ko.observableArray(['kitty', 'marniy', 'tommi', 'niky', 'lisa']);

	this.incrementCounter = function () {
		this.clickCount(this.clickCount() + 1);
	};

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
	})

}

// 激活ko
ko.applyBindings(new viewModel());

