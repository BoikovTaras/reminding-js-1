// Tasck 3

const ADMIN_PASSWORD = 'Wassad';
let message;

let login = window.prompt('Enter your password')

function checkLogin(login, password) {
    if (login == null) {
        message = 'Отменено пользователем!'
    } else if (login === password) {
        message = 'Добро пожаловать!'
    } else {
        message = 'Доступ запрещен, неверный пароль!'    
    }
}
checkLogin(login, ADMIN_PASSWORD);

window.alert(message);