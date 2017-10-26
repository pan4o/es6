
function applyForVisa(documents) {
	console.log('Обрботка заявления...');

	var promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			Math.random() > 0.5 ? resolve('visa!!') : reject('В визе отказанно, не хватило документов');
		}, 2000);
	});

	return promise;

}

function getVisa(visa) {
	console.log('Виза получена');
	return visa;
}

function bookHotel(visa) {
	console.log(visa)
	console.log('Отель забронирован');
	return visa;
}

function buyTickets (visa) {
	console.log('Билеты куплены');
	console.log(visa + ' 2')
}

function fly() {
	console.log('Улетели');
	return new Promise(function (resolve, reject) {
		//reject('Самолет не взлетел'); ДАЛЬШЕ ВНИЗ НЕ ПОЙДЕТ
		resolve(); //пойдет дальше
	});
}

function land() {
	console.log('Приземлились');
}

applyForVisa()
	.then(getVisa)
	.then(bookHotel)
	.then(buyTickets)
	.then(fly)
	.then(land)
	.catch(error => console.log(error));

//https://youtu.be/SjNmkeUpQAU?t=4m28s