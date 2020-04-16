//1. Создать объект, добавить к нему свойство

let languages = {
    one: 'JS',
    two: 'Java',
};
languages['three'] = 'Python';

console.log(languages.three);


//2. Изменить свойство объекта 

let fruit = {
    one: 'apple',
    two: 'orange',
    three: 'pear'
};
console.log(fruit);

fruit['three'] = 'Kiwi';

console.log(fruit);



//3. Сделать свойство объекта функцией сложения двух чисел

let numbers = {
    num1: 'one',
    num2: 'two',
    num3: sum(),
};
console.log(numbers);

function sum() {
    var a = parseInt(prompt('First number'));
    var b = parseInt(prompt('Second number'));
    return a + b;
}