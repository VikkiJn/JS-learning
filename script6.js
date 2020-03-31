/* logical operators 
https://learn.javascript.ru/logical-operators*/


//1. Перебор массива с выводом в консоль каждого элемента

let color = ['red', 'yellow', 'green'];
for (let i = 0; i < color.length; i++) {
    console.log( color [i] );
}


//2. Преобразовать массив в строку и обратно в массив 

let planets = ['Earth', 'Mars', 'Venus'];
console.log ( planets );
let str = planets.join( '-' );
console.log( str );
console.log( str.split( '-' ) )



//3. Добавить к каждому элементу массива слова hello 

let names = ['Masha', 'Petia', 'Vania', 'Olia'];
let greet = names.map( name => 'hello ' + name);
console.log( greet );


//4. Преобразовать числовой массив в boolean

let isLessThreshold = (currentValue) => currentValue < 10;
let numbers = [1,2,3,4];
console.log( numbers.every(isLessThreshold) );
