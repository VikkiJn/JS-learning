// Operators

let x = 1, y = 3;
console.log( y - x ); // 2

x = -x;
console.log( x ); // -1

let nameSurname = "Vasia" + " Pupkin";
console.log( nameSurname ); // Vasia Pupkin

console.log(  2 + 2 + '1'  ); //41 ("4"+"1")

console.log(  +true  ); // 1

console.log( +"" ); // 0

let cats = "5";
let dogs = "8";
console.log( Number(cats) + Number(dogs) ); // 13

console.log( 8 % 3 ); // 2

console.log( 2 ** 4 ); // 16
console.log( 8 ** (1/3 ) ); // 2 (cube root)

let apple = 10;
apple--;
console.log( apple ); // 9

let orange = 10;
let pears = orange++;
console.log( pears ); // 10

let counter = 2;
console.log( 2* ++counter ); // 6

let num = 3;
console.log( num+=5 ); // 8
 
//Comparing

console.log( "2" > 1 ); // true
console.log( 5 == 3 ); // false
console.log( 3 != 2 ); // true
console.log( 'Я' > 'А' ); // true
console.log( false == 0 ); // true
console.log( false === 0 ); // false (different types)
console.log(  null === undefined ); // false
console.log(  null == undefined ); // true
console.log(  undefined < 0 ); // false (can't be compared)