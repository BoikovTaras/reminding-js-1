const total = 100;
const ordered = 50;

function checkOrder(total, order) {
    if (total >= order) {
        console.log("Заказ оформлен, с вами свяжется менеджер")
    } else {
        console.log("На складе недостаточно твоаров!")
    }
} 

checkOrder(total, ordered);
checkOrder(total, 20);
checkOrder(total, 140)