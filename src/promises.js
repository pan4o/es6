
function applyForVisa(documents, resolve, reject) {
	console.log('Обрботка заявления...');
	setTimeout(function () {
		let visa = {};
		Math.random() > 0.5 ? resolve() : reject('В визе отказанно, не хватило документов');
	}, 2000)
}

applyForVisa({}, function(visa) {
	console.log('Виза получена');
}, function (error) {
	console.error(error)
});

//https://youtu.be/SjNmkeUpQAU?t=4m28s