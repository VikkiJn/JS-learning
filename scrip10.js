//Date and Time.
//1. Получить текущую дату, вывести в консоль

let currentDate = new Date();
console.log(currentDate); 

//2. Получить день, месяц и год текущей даты и по отдельности вывести в консоль


let todayDate = new Date();
let currentDay = todayDate.getDate();
let currentMonth = todayDate.getMonth() + 1;
let currentYear = todayDate.getFullYear();
console.log('Day: ' + currentDay);
console.log('Month: ' + currentMonth);
console.log('Year: ' + currentYear); 

//3. Решить задачи из ссылки на теорию 
//Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг.

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

var d = new Date(2020, 3, 17); // 17 апреля 2020
console.log(formatDate(d)); // 17.04.20

