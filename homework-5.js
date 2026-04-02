// 3. Создание функции, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль

function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`);
};

showWeather("Cork", 9);

// 4. Создание переменной, которая хранит внутри себя скорость света

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log(`Сверхсветовая скорость`);
  } else if (speed === SPEED_OF_LIGHT) {
    console.log(`Скорость света`);
  } else {
    console.log(`Субсветовая скорость`);
  }
};

checkSpeed(299792458);

// 5. Создание переменной №1, которая содержит продукт и переменную №2, которая содержит его цену

const product = 'Redmi Note 15'; 
const priceProduct = 400;

function buyProduct(budget) {
  if (budget >= priceProduct) {
    console.log(`${product} приобретен, Спасибо за покупку!`);
  } else {
    const diff = priceProduct-budget;
    console.log(`Вам не хватает ${diff}$ пополните баланс`);
  }
};

buyProduct(400);

// 6. Создать 1 функцию и именовать её по своему усмотрению

function sayBye() {
  console.log("Пока!");
};

sayBye();

// 7. Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению

const userName = "Serj";
let userAge = 38;
var isWorker = true;

console.log(userName);
console.log(userAge);
console.log(isWorker);

