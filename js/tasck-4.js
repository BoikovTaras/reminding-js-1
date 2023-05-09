let credits = 23580;
const pricePerDroid = 3000;
let message = 'Сколько дроидов вы желаете купить?';
let totalPrice = 0;

const order = window.prompt(message);

function getOrder(pieces, price, count) {
    if (pieces == null) {
        window.alert('Отменено пользователем!')
    } else {
        totalPrice = price * pieces;
        if (totalPrice <= count) {
            credits = credits - totalPrice;
            window.alert(`вы купили ${pieces} дроидов, на счету ${credits} кредитов `)
        } else if (totalPrice > count) {
            window.alert('Недостаточно средств на счету!')
        }
    };
};
getOrder(order, pricePerDroid, credits);