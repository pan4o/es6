
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


// parameters

function sayHello (greeting, name) {
	console.log(`${greeting} ${name}`);
}

sayHello('Hi','Bill'); //Hi Bill
sayHello('Hi'); // Hi undefined
sayHello(); // undefined undefined


function sayHelloTest(greeting = 'Hello', name = 'Tom') {
	console.log(`${greeting} ${name}`);
}

sayHelloTest(); // Hello Tom

// Оставшиеся параметры

function sum(...numbers) { // превратит любое кол-во параметров в массив параметров
	let sum = 0;

	numbers.forEach(function (number) { // поэтому можно использовать forEach для перебора массива
		sum += number;
	});

	console.log(sum);
}

sum(2,3,4,1);


// сложить все числа в массиве через reduce

function reduceSum(array) {
	var result = array.reduce(function (prevValue, currentValue) {
		return prevValue + currentValue;
	});

	return result;
}

console.log(reduceSum([1,2,3])); // 6


//Цикл for of

let browsers = ['Chrome', 'Opera', 'Edge', 'Safari', 'Opera'];

for (let browser in browsers) {
	console.log(browser); // 0,1,2,3,4 потому что for in выводит индексы
}

//правильный вариант вывода браузеров через for in такой

for (let index in browsers) {
	console.log(browsers[index]); // 'Chrome', 'Opera', 'Edge', 'Safari', 'Opera'
}


// или же можно просто использовать for of

for (let browser of browsers) {
	console.log(browser); // 'Chrome', 'Opera', 'Edge', 'Safari', 'Opera'
}