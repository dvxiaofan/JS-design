var viewModel = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('cat01');
	this.imgSrc = ko.observable('images/cat01.jpg');
	this.imgAttribution = ko.observable('');

	this.incrementCounter = function () {
		this.clickCount(this.clickCount() + 1);
	};
}

// 激活ko
ko.applyBindings(new viewModel());



