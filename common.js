
/*Создать сущности Dog, Cat, Woodpecker, которые являются наследниками сущности Animal. Animal содержит свойства age, name, sound, region и метод say.
Dog, Cat, Woodpecker не содержит явно данных свойств, но наследует их у Animal.
Также они содержат метод goAway. Задание должно быть реализовано каждым из следующих способов: 
1 - прототипное наследование через функции-конструкторы
2 - наследование через конструкцию Object.create()
Вызвать метод say на каждой из сущностей.

Реализовать функции getTypep(), которая принимает один из объектов Dog, Cat, Woodpecker 
и возвращает его тип не используя оператор instanceof, а проверяя наличие свойств/методов объектов.

Модифицировать функцию так, что она не принимает объект, а оперирует с объектом this.
Функция объявляется вне контекста, но вызывается на определенном объекте при помощи call/apply/bind.*/

// task1

// version a)

var Animal = function(age, name, sound, region){
	this.age = age;
	this.name = name;
	this.sound = sound;
	this.region = region;	
};
Animal.prototype.say = function(){
	console.log(this.name + " say: " + this.sound + ".");
};

Animal.prototype.goAway = function(){
	console.log(this.name + " go away.");
};
var Dog = new Animal(12, "Rex", "woof woof", "USA");
var Cat = new Animal(3, "Kitty", "meoooow", "China");
var Woodpecker = new Animal(2, "Woody", "knock knock", "Ukraine");

Dog.say();
Cat.say();
Woodpecker.say()
Dog.goAway();

console.log(' ');

// version b) 

var Animal = {
	constructor: function(age, name, sound, region){
		this.age = age;
		this.name = name;
		this.sound = sound;
		this.region = region;

		this.say = function(){
			console.log(this.name + " say: " + this.sound + ".");
		};

		this.goAway = function(){
			console.log(this.name + " go away.");
		};
		return this;
	}
};


var Dog = Object.create(Animal).constructor(12, "Rex", "woof woof", "USA");
var Cat = Object.create(Animal).constructor(3, "Kitty", "meoooow", "China");
var Woodpecker = Object.create(Animal).constructor(2, "Woody", "knock knock", "Ukraine");

Dog.say();
Cat.say();
Woodpecker.say()
Dog.goAway();

console.log(" ");

// task2  На жаль, не розумію що потребується в завданні...

function getType(obj){
	var toString = Object.prototype.toString;
	return toString.call(obj);
};

console.log(getType(Dog));
