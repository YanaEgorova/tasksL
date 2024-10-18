// 85. Создай функцию makePizza которая имеет два параметра:
// pizzaName - имя пиццы и callback - коллбек - функцию.
// Во время выполнения, makePizza выводит в консоль строку "Pizza <pizzaName> is being prepared, please wait..."
// и вызывает коллбек, передавая ему pizzaName в качестве аргумента.

// Напиши два вызова функции makePizza(pizzaName, callback)
// в первом вызове в первый аргумент передай строку "Royal Grand"
// а в колбек передай функцию которая выводит в консоль строку
// "Delivering pizza <pizzaName>"

// во втором вызове в первый аргумент передай строку "Ultracheese"
// а в колбек передай функцию которая выводит в консоль строку
// "Eating pizza <pizzaName>"

function makePizza(pizzaName, callback) {}

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

// 86. Создай функцию calculateTotalPrice(orderedItems) которая принимает один параметр orderedItems - массив чисел,
// и рассчитывает общую сумму его элементов,
// которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Используй forEach

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach((el) => (totalPrice += el));

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// 87. Создай функцию filterArray(numbers, value) которая принимает первым параметром массив чисел numbers
// и возвращает новый массив, в котором будут только те элементы оригинального массива,
// которые больше значения второго параметра числа value.
// Если таких значений не будет найдено, функция возвращает пустой массив.
// Используй forEach

function filterArray(numbers, value) {
  const res = [];
  numbers.forEach((number) => {
    if (number > value) {
      res.push(number);
    }
  });
  return res;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// 88. Перепиши функцию calculateTotalPrice() таким образом,
// чтобы она была объявлена как стрелочная.

// Усложненжие: перепиши еще раз функцию так чтобы она использовала неявный возврат

function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
}

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

console.log(calculateTotalPrice(5, 100)); // 500
console.log(calculateTotalPrice(8, 60)); // 480
console.log(calculateTotalPrice(3, 400)); // 1200

// ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАСИВОВ

// 89. В массиве planets хранятся названия планет.
// Дополни код таким образом, чтобы в переменной planetsLengths получился массив,
// который будет состоять из длин названий каждой планеты из массива planets.
// Обязательно используй метод map().

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths); // [5, 4, 5, 7]

// 90. В массиве students хранятся обьекты студентов.
// Дополни код таким образом, чтобы в переменной names получился массив,
// который будет состоять из свойств name из массива students.
// Обязательно используй метод map().

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// 91. Массив books содержит коллекцию объектов книг,
// каждый из которых содержит свойства title, author, rating.
// Используя метод map(), сделай так, чтобы в переменной titles получился массив названий всех книг(свойство title) из массива books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);

// console.log(titles) // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

// 92. В массиве students хранятся обьекты студентов.
// Дополни код таким образом, чтобы в переменной mappedCourses получился массив массивов из свойств courses,
// в переменной flattenedCourses получился массив свойств courses,
// Обязательно используй метод map() и flatMap().

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map((student) => student.courses);
console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students.flatMap((student) => student.courses);
console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// *********

// 93. Массив books содержит коллекцию объектов книг,
// каждый из которых содержит свойство genres, значением которого является массив жанров.
// Используя метод flatMap(), сделай так, чтобы в переменной genres получился массив жанров всех книг(свойство genres) из массива books.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books.flatMap((book) => book.genres);

console.log(genres); // ["adventure", "history", "fiction", "horror", "mysticism"]

// 94. Создай функцию doubleIt которая принимает массив чисел и возвращает
// новый массив с удвоеными значениями
// используй map()

function doubleIt(arr) {
  const res = arr.map((elem) => elem * 2);
  return res;
}

console.log(doubleIt([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]

// 95. Создай функцию multiply которая принимает массив чисел и возвращает
// новый массив с числами которые равны число умноженое на его индекс
// используй map()

function multiply(arr) {
  const res = arr.map((elem, index) => elem * index);
}

console.log(multiply([1, 2, 3, 4, 5])); // [0, 2, 6, 12, 20]

// 96. Создай функцию multiplyByTwo(arr) которая принимает массив чисел и возвращает массив строку формата
// "<число> - <его индекс> - <длинна массива>"
// используй map()

function multiplyByTwo(arr) {
  const res = arr.map(
    (elem, index, array) => `${elem} - ${index} - ${array.length}`
  );
  return res;
}

console.log(multiplyByTwo([1, 2, 3])); // ['1 - 0 - 5', '2 - 1 - 5', '3 - 2 - 5']

// 97. Создай функцию numberToString(arr) которая принимает массив чисел
// и возвращает массив строк из этих чисел
// используй map()

function numberToString(arr) {
  return arr.map((num) => num.toString());
}

console.log(numberToString([1, 2, 3, 4])); // ["1", "2", "3", "4"]

// 98. Создай функцию greetings(arr) которая принимает массив строк
// и возвращает массив строк с добавленым в конце знаком восклицания
// используй map()

// напиши первый вариант решения через конкатенацию строк
// и второй через шаблонную строку

function greetings(arr) {
  return arr.map((greet) => greet + "!");
}

console.log(greetings(["Hello", "Hi", "Hey"])); // ["Hello!", "Hi!", "Hey!"]

// 99. Создай функцию highRegister(arr) которая принимает массив строк
// и возвращает массив строк в верхнем регистре
// используй map()

function highRegister(arr) {
  return arr.map((word) => word.toUpperCase());
}

console.log(highRegister(["hello", "world"])); // ["HELLO", "WORLD"]

// 100. Создай функцию countAge(arr) которая принимает массив обьектов
// в каждом из которых есть имя человека и его год рождения
// функция должна возврщать массив чисел возростов
// текущий год сохранен в переменной currentYear
// используй map()

function countAge(arr) {
  return arr.map((person) => currentYear - person.birthYear);
}

const people = [
  { name: "John", birthYear: 1990 },
  { name: "Jane", birthYear: 1985 },
];

const currentYear = 2024;

console.log(countAge(people)); // [34, 39]

// 101. Создай функцию invertBoolean(arr) которая принимает массив булей
// и возвращает их инвертированое значение
// используй map()

function invertBoolean(arr) {
  return arr.map((bool) => !bool);
}

console.log(invertBoolean([true, false, true])); // [false, true, false];

// 102. Создай функцию getFirstLetter(arr) которая принимает массив строк
// и возвращает массив первых символов этих строк
// используй map()

function getFirstLetter(arr) {
  return arr.map((word) => word[0]);
}

console.log(getFirstLetter(["apple", "banana", "cherry"])); // ['a', 'b', 'c']

// 103. Создай функцию conToBoolean(arr) которая принимает массив чисел
// и возвращает массив булевых преобразований этих чисел
// используй map()

function conToBoolean(arr) {
  return arr.map((num) => Boolean(num));
}

console.log(conToBoolean([0, 1, 2, 0, 5])); // [false, true, true, false, true]

// 104. Создай функцию addIdx(arr) которая принимает массив строк
// и возвращает массив строк с добавленым индексом в начале
// используй map()

function addIdx(arr) {
  return arr.map((word, index) => `${index}: ${word}`);
}

console.log(addIdx(["apple", "banana", "cherry"])); // ['0: apple', '1: banana', '2: cherry']

// 105. Создай функцию addIdxToLength(arr) которая принимает массив строк
// и возвращает массив чисел которые являються результатом сложения длинны строки и ее индекса
// используй map()

function addIdxToLength(arr) {
  return arr.map((word, index) => word.length + index);
}

console.log(addIdxToLength(["apple", "banana", "cherry"])); // [5, 7, 8]

// 106. Создай функцию countPercentage(arr) которая принимает массив чисел
// и возвращает массив чисел которые равны 10% от каждого числа
// используй map()

function countPercentage(arr) {
  return arr.map((num) => num * 0.1);
}

console.log(countPercentage([10, 55, 89])); // [1, 5.5, 8.9]

// 107. Создай функцию createObj(arr) которая принимает массив чисел
// и возвращает массив обьектов в каждом из которых есть свойство age (возраст) со значение переданого числа
// используй map()

// Усложнение используй сокращенные свойства обьекта (shortcut properties)

function createObj(arr) {
  return arr.map((age) => {
    return {
      age: age,
    };
  });
}

console.log(createObj([18, 21, 30])); // [{age: 18}, {age: 21}, {age: 30}]

// 108. Создай функцию createTags(arr) которая принимает массив строк
// и возвращает массив строк состоящих из тегов <p></p> с текстовым контентом из переданых строк
// используй map()

function createTags(arr) {
  return arr.map((sentence) => `<p>${sentence}</p>`);
}

console.log(createTags(["Hello", "World"])); // ['<p>Hello</p>', '<p>World</p>']

// 109. Создай функцию roundNumber(arr) которая принимает массив чисел
// и возвращает массив округленных чисел
// используй map()

function roundNumber(arr) {
  return arr.map((num) => Math.round(num));
}

console.log(roundNumber([1.4, 2.7, 3.1])); // [1, 3, 3]

// 110. Создай функцию deleteSpace(arr) которая принимает массив строк
// и возвращает массив строк с удалеными по краям пробелами
// используй map()

function deleteSpace(arr) {
  return arr.map((str) => str.trim());
}

console.log(deleteSpace(["  hello  ", " world "])); // ['hello', 'world']

// 111. Создай функцию convertToPercentage(arr) которая принимает массив чисел
// и возвращает массив строк с этими числами в виде процентов
// используй map()

function convertToPercentage(arr) {
  return arr.map((num) => `${num}%`);
}

console.log(convertToPercentage([50, 75, 100])); // ['50%', '75%', '100%']

// 112. Создай функцию isItBoolean(arr) которая принимает массив чисел
// и возвращает массив булей
// true - если число четное
// false - если число не четное
// используй map()

function isItBoolean(arr) {
  return arr.map((num) => num % 2 === 0);
}

console.log(isItBoolean([1, 2, 3, 4])); // [false, true, false, true]

// *********************************

// 113. Создай функцию userDescriptions(arr) которая принимает массив обьектов
// со свойствами name, age, city
// и возвращает массив строк в формате "<name> (<age>), <age>"
// используй map()

function userDescriptions(arr) {
  return arr.map((user) => `${user.name} (${user.age}), ${user.city}`);
}

const users = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "London" },
  { name: "Charlie", age: 28, city: "Paris" },
];

console.log(userDescriptions(users)); // ['Alice (25), New York', 'Bob (30), London', 'Charlie (28), Paris']

// 114. Создай функцию flattenedPeople(arr) которая принимает массив обьектов
// со свойствами name и address
// и возвращает массив обьектов со свойствами name, city, country
// используй map()

function flattenedPeople(arr) {
  return arr.map((person) => ({
    name: person.name,
    city: person.address.city,
    country: person.address.country,
  }));
}

const peoples = [
  { name: "Alice", address: { city: "New York", country: "USA" } },
  { name: "Bob", address: { city: "London", country: "UK" } },
];

console.log(flattenedPeople(peoples)); // [{ name: 'Alice', city: 'New York', country: 'USA' }, { name: 'Bob', city: 'London', country: 'UK' }]

// 115. Создай функцию updatedData(arr) которая принимает массив обьектов
// со свойством numbers в котором лежит массив чисел
// и возвращает массив обьектов со свойством numbers в котором лежит массив чисел увеличеных на 5
// используй map()

function updatedData(arr) {
  return arr.map((item) => ({
    numbers: item.numbers.map((num) => num + 5),
  }));
}

const data = [
  { numbers: [1, 2, 3] },
  { numbers: [4, 5, 6] },
  { numbers: [7, 8, 9] },
];

console.log(updatedData(data)); // [{ numbers: [6, 7, 8] }, { numbers: [9, 10, 11] }, { numbers: [12, 13, 14] }]

// 116. Создай функцию flatArray(arr) которая принимает массив массивов
// и возвращает массив чисел
// используй flatMap()

function flatArray(arr) {
  return arr.flatMap((row) => row);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(flatArray(matrix)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 117. Создай функцию doubledValues(arr) которая принимает массив обьектов
// и возвращает массив чисел из этих обьектов умноженых на 2
// используй flatMap() и map()

function doubledValues(arr) {
  return arr.flatMap((item) => item.values.map((num) => num * 2));
}

const items = [
  { values: [1, 2, 3] },
  { values: [4, 5] },
  { values: [6, 7, 8] },
];

console.log(doubledValues(items)); // [2, 4, 6, 8, 10, 12, 14, 16]

// 118. Создай функцию flatArray(arr) которая принимает массив массивов
// и возвращает массив чисел но без пустых масивов
// используй flatMap()

function flatArray(arr) {
  return arr.flatMap((arr) => arr);
}

const arrays = [[1, 2], [], [3, 4], [], [5]];

console.log(flatArray(arrays)); // [1, 2, 3, 4, 5]

// 119. Создай функцию words(arr) которая принимает массив строк
// и возвращает массив слов
// используй flatMap()

function words(arr) {
  return arr.flatMap((sentence) => sentence.split(" "));
}

const sentences = ["Hello world", "FlatMap is useful", "JavaScript is fun"];

console.log(words(sentences)); // ['Hello', 'world', 'FlatMap', 'is', 'useful', 'JavaScript', 'is', 'fun']

// 120. Создай функцию doubledEvens(arr) которая принимает массив чисел
// и возвращает массив чисел
// 1 - если текущее число не парное
// число умноженное на 2 - если текущее число парное
// используй map() и тернарный оператор

function doubledEvens(arr) {
  return arr.map((num) => (num % 2 === 0 ? num * 2 : 1));
}

const numbers = [1, 2, 3, 4, 5, 6];

console.log(doubledEvens(numbers)); // [1, 4, 1, 8, 1, 12]

// 121. Создай функцию allItems(arr) которая принимает массив обьектов
// и возвращает массив значений items каждого обьекта
// используй flatMap()

function allItems(arr) {
  return arr.flatMap((item) => item.items);
}

const data2 = [
  { items: [{ id: 1 }, { id: 2 }] },
  { items: [{ id: 3 }, { id: 4 }] },
  { items: [{ id: 5 }] },
];

console.log(allItems(data2)); // [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

// 122. Создай функцию prefixedNames(arr) которая принимает массив обьектов
// и возвращает массив строк с добавленым в начале словом Item
// используй flatMap() и map()

function prefixedNames(arr) {
  return arr.flatMap((item) => item.names.map((name) => `Item: ${name}`));
}

const items2 = [
  { names: ["apple", "banana"] },
  { names: ["carrot", "cucumber"] },
  { names: ["milk", "cheese"] },
];

console.log(prefixedNames(items2)); // ['Item: apple', 'Item: banana', 'Item: carrot', 'Item: cucumber', 'Item: milk', 'Item: cheese']

// 123. Создай функцию evenNumbers(arr) которая принимает массив чисел
// и возвращает массив только четных чисел
// используй filter()

function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const numbers3 = [1, 2, 3, 4, 5, 6];

console.log(evenNumbers(numbers3)); // [2, 4, 6]

// 124. Создай функцию longWords(arr) которая принимает массив строк
// и возвращает массив строк длинна которых больше 3
// используй filter()

function longWords(arr) {
  return arr.filter((word) => word.length > 3);
}

const words3 = ["a", "abc", "abcd", "abcde"];

console.log(longWords(words3)); // ['abcd', 'abcde']

// ******************************************
