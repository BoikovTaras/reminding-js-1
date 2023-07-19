// let total = 0;
// let corect;
// const message = 'Введіть своє число'

// let input = window.prompt(message)

// function addNumber(num) {
//     do {total = Number(total) + Number(num)}
//     while(num == null)
// };
// addNumber(input)

// window.alert(`Загальна сума чисел ${total}`)


// Цикл do-while
// Обробка даних під час вводу.
// Дана послідовність чисел, яка завершується нулем.
// Обчислити суму введених чисел.

// 1. Оголосити змінні
var num   // число, яке буде вводитись з клавіатури
var sum = 0.0 // обчислювана сума

// 2. Цикл обчислення
do {
  // Вивести вікно вводу числа     
    num = prompt("Enter number: ", '0');
    sum = Number(sum) + Number(num);
    console.log(num)
} while (num != null);
console.log(num)

// 3. Вивести результат
window.alert("sum = " + sum)