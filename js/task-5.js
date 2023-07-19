const countries = [
    { name: 'Китай', price: 100 },
    { name: 'Чилі', price: 250 },
    { name: 'Австралія', price: 170 },
    { name: 'Індія', price: 80 },
    { name: 'Ямайка', price: 120 }
];
let message = 'В яку раїну Ви бажаєте оформити доставку';

const deliver = window.prompt(message);

function getDeliver(country, deliveryList) {
    if (country == null) {
        window.alert('Відхилено користувачем')
    } 
    for (const list of deliveryList) {
         if (list.name.toLowerCase() == country.toLowerCase()) {
            window.alert(`Доставка в ${list.name} буде коштувати ${list.price} кредитів`)
            break 
         } else if (list.name.toLowerCase() !== country.toLowerCase()) {
            window.alert('В ващій країні доставка недоступна')
            break  
        }
    }

}
getDeliver(deliver, countries)