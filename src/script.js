
if (true) {

	let version = 'es6';	

}

//console.log(version); //ошибка


var buttons = document.querySelectorAll('button'),
	i;

for (i = 0; i < buttons.length; i++) {

	buttons[i].innerText = i;

	buttons[i].onclick = function () {
		console.log(i);
	}

};