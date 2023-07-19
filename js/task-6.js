let total = 0;
let corect;
const message = 'Введіть своє число'

let input = window.prompt(message)
console.log(input)
// console.log(input.isNunber())

function addNumber(num) {
    if (num == null) {
        window.alert(`${total}`)
        return
    }
     (num != null) {
        total = Number(total) + Number(num)
    }
};

addNumber(input)
console.log(total)