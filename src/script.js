
if (true) {

	let version = 'es6';

}

//console.log(version); //ошибка


var buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {

	buttons[i].innerText = i;

	buttons[i].onclick = function () {
		console.log(i);
	}

};


const PI = 3.14;

// PI = 3 // ошбика, const нельзя поменять

//А вот свойство обьекта созданного при помощи const можно легко заменить

const MATH = {
	PI: 3.14
}

MATH.PI = 3.15;

console.log(MATH.PI); // 3.15

// Но вот если мы захотим перезаписать сам обьект, то тут выдаст ошибку

/*MATH = {
	PI: 3.15       //ERROR
}*/


// Оператор разворота

let staticLanguages = ['C', 'C++', 'Java'];
let dymamicLanguages = ['Javascript', 'PHP', 'Ruby'];

let languages = ['C#', ...staticLanguages, 'Pythone', ...dymamicLanguages];

console.log(languages); //[ "C#", "C", "C++", "Java", "Pythone", "Javascript", "PHP", "Ruby" ]

function add(x, y, z) {
	console.log(x + y + z);
}

let arr = [1, 2, 3];

//не правильный результат

add(arr); //1,2,3undefinedundefined


//правильный результат

add(...arr); // 6



//шаблонные строки

function greet(name) {
	console.log(`Hello ${name}`.toUpperCase());
}

greet('Bill'); // HELLO BILL

// поддерживает многострочность
function createEmail(to, from, subject, message) {
	console.log(`
		to: ${to}
		from: ${from}
		subject: ${subject}
		message: ${message}
	`)
}

createEmail('me','you','loveletter','i love you');

function addTwoNumbers(x,y) {
	console.log(`${x} + ${y} = ${x + y}`);
}

addTwoNumbers(5,7);

//тегирование в шаблонах строки

function upperName(literals, value) {
	return literals[0] + value.toUpperCase();
}

let person = "Tom";
console.log(upperName `Hello ${person}`); //Hello TOM