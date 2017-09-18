
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


//Objects

let firstName = 'Bill',
	lastName = 'Gates',
	email = 'billgates@microsoft.com';


// в es6 можно указывать только названия свойст в виде переменных
// так же при обьявлении метода убрать слова function и ":" оставив только название метода и скобки

let bill = {
	firstName,
	lastName,
	email,
	sayHello() {
		console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
	}
};


bill.sayHello();

function createCar(property, value) {
	var car = {};

	car[property] = value;

	return car;
}

console.log(createCar('number', 1234));

//тоже самое, только в es6. тут квадратные скобки можно использовать прямо в литерале обьекта

function createCarTest(property, value) {
	return {
		[property]: value,
		//пример динамического название метода
		['_get' + property]() {
			return this[property];
		}
	}
}

console.log(createCarTest('numberTest', 123445));

//Реализация геттера и сеттера на es5

let tom = {
	firstName: 'Tom',
	lastName: 'Dwan'
}

Object.defineProperty(tom, 'fullName', {
	get: function () {
		return this.firstName + ' ' + this.lastName;
	},
	set: function (value) {
		return this.firstName = value;
	}
});

console.log(tom.fullName); // Tom Dwan

tom.fullName = 'Bill';

console.log(tom.fullName); //Bill Dwan

//тоже самое на es6

let tim = {
	firstName: 'Tim',
	lastName: 'Burton',
	get fullName() {
		return this.firstName + ' ' + this.lastName;
	},
	set fullName(value) {
		return this.lastName = value;
	}
}

console.log(tim.fullName); // Tim Burton

tim.fullName = 'Johnes';

console.log(tim.fullName); // Tim Johnes


//classes

class Task {

	constructor(title = Task.getDefaultTitle()) {

		this.title = title;
		this._done = false;

		Task.count += 1;

		console.log('class is created');

	}

	complete() {
		this.done = true;
	}

	get done() {
		return this._done ? 'completed' : 'non compeleted';
	}

	set done(value) {

		if (value !== undefined && typeof value === 'boolean') {

			this._done = value;

		} else {

			console.error('error');

		}

	}

	static getDefaultTitle () {
		return 'this is default title';
	}

}

Task.count = 0;

let task = new Task('random text');
let newTask = new Task('random text 2');
let thirdTask = new Task();

console.log(typeof Task); // function

console.log(task instanceof Task); // true

console.log(task.title);

console.log(newTask.title);


console.log(newTask._done,'newTask._done'); //false

newTask.complete();

console.log(newTask._done,'newTask._done'); //true

console.log(Task.count);

console.log(thirdTask.title); // this is default title

// thirdTask.getDefaultTitle() будет ошибка, т.к. статические методы есть только у самого класса,
// а не у экземпляров созданных с его помощью

let doneTest = new Task();

console.log(doneTest.done); // non competed
console.log(doneTest._done); // false

doneTest.complete();

console.log(doneTest.done); //completed
console.log(doneTest._done); //true

console.log('==========')

class Man {

	constructor(name) {
		this._name = name
	}


	get name() {
		return this._name.toUpperCase();
	}

	set name(newName) {
		this._name = newName;
	}

}

let tonny = new Man('tonny');

console.log(tonny.name); //TONNY

tonny.name = "Antoha";

console.log(tonny.name); //ANTOHA

//pizda
