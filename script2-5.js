// Type Conversions

// Numbers to Strings
console.log( String(123) ); //  "123"
console.log( String( 200 + 23 ) ); //  "223"
console.log( (555).toString() ); // "555"

// Booleans to Strings
console.log( String( false ) ); //  "false"
console.log( true.toString() ); //  "true"

let value = true;
value = String(value);
console.log( typeof value ); // string

//String to Numbers
var a = "123";
console.log( Number(a)); //  "123 "


console.log( "\n0 " == 0 ); // true (0=0)
console.log( "\n" == false ); // true (0=0)
console.log( "1" == true ); //true (1=1)

//Special
console.log( null > 0 ); // false (not grater than 0) 
console.log( undefined > 0 ); //false (NaN)
console.log( 0 == "\n0\n" ); // true (0=0)


//Dates to Strings+
console.log( String( Date() ) ); // returns сurrent date, time
console.log( Date().toString() ); //the same: returns сurrent date, time









