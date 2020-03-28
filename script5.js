/* logical operators 
https://learn.javascript.ru/logical-operators*/


// 1-5. Что выведет код?
alert( null || 2 || undefined ); //2

alert( alert(1) || 2 || alert(3) ); //1, 2 

alert( 1 && null && 2 ); //null

alert( alert(1) && alert(2) ); //1, underfined

alert( null || 2 && 3 || 4 ); //3 (2 && 3 = 3; null || 3 || 4)


//6. Проверка значения ИЗ диапазона (14-90)
let age = 20;
if (age >= 14 && age <= 90) {
    alert ( "Your age is from 14-90" );
    
} else {
    alert ( "You're too young or too old" );
    
}


//7. Проверка значения ВНЕ диапазона (14-90) c НЕ !, второй – без этого оператора.

//1й вариант с НЕ
if ( !(age1 >= 14 && age1 <=90) );

//2й вариант без НЕ
if ( age1 < 14 || age1 > 90  );


//8. Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?
if ( -1 || 0 ) alert( 'first' ); // выполнится (-1 это true)
if ( -1 && 0 ) alert( 'second' ); // не выполнится (0 это false)
if ( null || -1 && 1 ) alert( 'third' ); // выполнится (1)


//9. Проверка логина

var userName = prompt( 'Who is there?', ' ' );
if (userName == 'Admin') {
    var password = prompt( 'Password?', ' ' );
    if (password == 'boss') {
        alert( 'Hello!' );
    } else if ( password == ' ' || password == null ) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if  ( userName == ' ' || userName == null ) {
    alert( 'Canceled' );
} else {
    alert( 'I don`t know you' );
}