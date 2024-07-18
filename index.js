//Task 1

const createMessage = () => "Hello world!";

const showMessage = (callback) => {
  const message = callback();
  alert(message);
};

showMessage(createMessage);

//Task 2

const max = 100;
const min = 1;

const randomNumber = Math.round(Math.random() * (max - min) + min);
const userNumber = prompt("Вгадайте число, яке було випадково згенерованим:");

const chooseNumber = (userNumber, randomNumber, callback) => callback(userNumber, randomNumber);

const checkNumber = (userNumber, randomNumber) => {
    let numberMessage;

    if (userNumber === randomNumber) {
        numberMessage = alert("Так, ви вгадали!");
    } else {
        numberMessage = alert("Не правильно, ви не вгадали!");
    }

    return numberMessage;
};

chooseNumber(userNumber, randomNumber, checkNumber);

//Task 3

let userInput;
const userInputs = [];

while (userInput !== null) {
    userInput = prompt("Введіть будь-які дані, для того, щоб ми могли порахувати, скільки разів ви щось сюди ввели.");

    userInputs.push(userInput);

    if (userInput === null) {
      userInputs.pop(2);
    }

}

const showUserInputs = () => alert(`Кількість введених даних: ${userInputs.length}`);

showUserInputs();

//Task 4

const applyCallbackToEachElement = (arr, callback) => {
    const eachNumbers = [];

    for (const number of arr) {
        const squaredNumber = callback(number);
        eachNumbers.push(squaredNumber);
    }

    return eachNumbers;
};

const squareCallback = (number) => number ** 2;

const arr = [1, 2, 3, 4, 5];

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

// Task 5

const calculateDiscountedPrice = (price, discount, callback) => {
    let discountPrice = price - ((price * discount) / 100);
    const callbackDiscountPriceMessage = callback(discountPrice);

    return callbackDiscountPriceMessage;
};

const showDiscountedPrice = (discountPrice) => alert(`Остаточна ціна вашого товару зі знижкою становить ${discountPrice} грн`);

calculateDiscountedPrice(100, 10, showDiscountedPrice);



