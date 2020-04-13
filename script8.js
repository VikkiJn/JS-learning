// FUNCTIONS

//1. Функция сложения двух чисел
function sum(a, b) {
    return a + b;
}
let result = sum(4, 6);
console.log(result);

//2. Фунукция определения имени(если имя  ваше, то привет + имя)

function checkName(name) {
    return name == 'Vika';
}
let name = prompt('What is your name?', ' ');
if (checkName(name)) {
    alert("Hello " + name);
} else {
    alert("Wrong name");
}

//3. Функция вычесления типа аргумента и вывод в консоль

function checkType(arg) {
    console.log(typeof (arg));
}
checkType(2);
checkType(true);
checkType('string');

//4. Функция выбора четных элементов массива(возвращает новый массив)

function getEven(arr) {
    return arr.filter(item => item % 2 === 0);
}
newArr = getEven([1, 2, 3, 4, 6, 7, 8, 9]);
console.log(newArr);


//5. задачи в конце главы
//https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

//*#1. Write a JavaScript function that reverse a number.

function revNum(n) {
    n = String(n);
    return n.split("").reverse().join("");
}
console.log(revNum(32243));

// #2. Write a JavaScript function that checks whether a passed string is palindrome or not?

function checkPalindrome(str_entry) {

    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;

    if (cstr === "") {
        console.log("Nothing found!");
        return false;
    }

    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {

        if (cstr.length === 1) {
            console.log("Entry is a palindrome.");
            return true;
        } else {

            ccount = (cstr.length - 1) / 2;
        }
    }

    for (var x = 0; x < ccount; x++) {

        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            console.log("Entry is not a palindrome.");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
    return true;
}
checkPalindrome('madam');
checkPalindrome('search');
checkPalindrome('mad max');

//#3. Write a JavaScript function that generates all combinations of a string.

function substrings(str1) {
    var array1 = [];
    for (var x = 0, y = 1; x < str1.length; x++, y++) {
        array1[x] = str1.substring(x, y);
    }
    var combi = [];
    var temp = "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent; i++) {
        temp = "";
        for (var j = 0; j < array1.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += array1[j];
            }
        }
        if (temp !== "") {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("dog");

//#4.  Write a JavaScript function that returns a passed string with letters in alphabetical order.

function orderAlphabet(str) {
    return str.split('').sort().join('');
}
console.log(orderAlphabet("customizable"));
console.log(orderAlphabet("article"));

//#5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function uppercase(str) {
    var array = str.split(' ');
    var newArray = [];

    for (var x = 0; x < array.length; x++) {
        newArray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
    }
    return newArray.join(' ');
}
console.log(uppercase("js is time consuming to learn"));

//#6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function findLongest(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
console.log(findLongest('JS is a scripting language'));

//#7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowels(str1) {
    let vowelList = 'aeiouAEIOU';
    let vowCount = 0;

    for (let x = 0; x < str1.length; x++) {
        if (vowelList.indexOf(str1[x]) !== -1) {
            vowCount += 1;
        }

    }
    return vowCount;
}
console.log(countVowels("What amazing exercises"));

//#8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function checkIfPrime(n) {
    if (n === 1) {
        return 'It`s not prime';
    }
    else if (n === 2) {
        return 'It`s prime';
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return 'It`s not prime';
            }
        }
        return 'It`s prime';
    }
}
console.log(checkIfPrime(37));
console.log(checkIfPrime(1));
console.log(checkIfPrime(42));
console.log(checkIfPrime(2));

//#9. Write a JavaScript function which accepts an argument and returns the type.

function defineType(value) {
    var dataTypes = [Function, RegExp, Number, String, Boolean, Object], x, len;

    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dataTypes.length; x < len; x++) {
            if (value instanceof dataTypes[x]) {
                return dataTypes[x];
            }
        }
    }
    return typeof value;
}
console.log(defineType(40));
console.log(defineType('quarantine'));
console.log(defineType(false));
console.log(defineType(new Object()));

//#10.  Write a JavaScript function which returns the n rows by n columns identity matrix.

function matrix(n) {

    var i;
    var j;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j) {
                console.log(' 1 ');
            }
            else {
                console.log(' 0 ');
            }
        }
        console.log('----------');
    }
}
matrix(4);

//#11.  Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function secondGreatestLowest(arrNum) {
    arrNum.sort(function (x, y) {
        return x - y;
    });
    var uniqa = [arrNum[0]];
    var result = [];

    for (var j = 1; j < arrNum.length; j++) {
        if (arrNum[j - 1] !== arrNum[j]) {
            uniqa.push(arrNum[j]);
        }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
    return result.join(',');
}

console.log(secondGreatestLowest([2, 3, 4, 5, 6]));

//#12. Write a JavaScript function which says whether a number is perfect.

function isPerfect(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }
    if (temp === number && temp !== 0) {
        console.log("It is a perfect number.");
    }
    else {
        console.log("It is not a perfect number.");
    }
}
isPerfect(28); 
isPerfect(14);

//#13. Write a JavaScript function to compute the factors of a positive integer.

function factors(n) {
    var numFactors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0) {
            numFactors.push(i);
            if (n / i !== i)
            numFactors.push(n / i);
        }
        numFactors.sort(function (x, y) {
        return x - y;
    });  // numeric sort
    return numFactors;
}
console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]

//#14. Write a JavaScript function to convert an amount to coins.
function amountToCoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountToCoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountToCoins(amount, coins);
        }
    }
} 
console.log(amountToCoins(38, [25, 10, 5, 2, 1]));

//#15. Write a JavaScript function to compute the value of b, n where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function exponent(b, n) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res = b * res;
    }
    return res;
}
console.log(exponent(2, 4));

//#16. Write a JavaScript function to extract unique characters from a string.

function uniqueChar(str1) {
    var str = str1;
    var uniql = "";
    for (var x = 0; x < str.length; x++) {

        if (uniql.indexOf(str.charAt(x)) == -1) {
            uniql += str[x];

        }
    }
    return uniql;
}
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

//#17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.

function сharCount(str1) {
    var uchars = {};
    str1.replace(/\S/g, function (l) { uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1); });
    return uchars;
}
console.log(сharCount("The quick brown fox jumps over the lazy dog"));

//#18. Write a function for searching JavaScript arrays with a binary search.
function binSearch(arr, value) {
    let start = 0,
        end = arr.length - 1,
        mid;
    while (~arr.indexOf(value)) {
        mid = Math.ceil((start + end) / 2);
        if (value < arr[mid]) {
            end = mid - 1;
        } else if (value > arr[mid]) {
            start = mid + 1;
        } else {
            break;
        }
    }
    return mid || null;
}
const arr = [1, 7, 15, 21, 35, 44, 52, 100];
console.log(binSearch(arr, 44)); // 5
console.log(binSearch(arr, 23)); // null

//#19. Write a JavaScript function that returns array elements larger than a number.

function BiggerElements(val) {
    return val >= 10;
}
var resultBigger = [11, 4, 8, 15, 10, 22, 44].filter(BiggerElements);
console.log(resultBigger);

//#20. Write a JavaScript function that generates a string id (specified length) of random characters. 

function makeId(l) {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < l; i++) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}
console.log(makeId(8));

//#21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

function subset(array, arraySize) {
    var resultSet = [],
        result;
    for (var x = 0; x < Math.pow(2, array.length); x++) {
        result = [];
        i = array.length - 1;
        do {
            if ((x & (1 << i)) !== 0) {
                result.push(array[i]);
            }
        } while (i--);

        if (result.length >= arraySize) {
            resultSet.push(result);
        }
    }
    return resultSet;
}
console.log(subset([1, 2, 3], 2));

//#22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function charCount(str, letter) {
    var letterCount = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}
console.log(charCount('exhausting.evening', 'e'));

//#23. Write a JavaScript function to find the first not repeated character.

function findFirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
    for (var x = 0; x < arra1.length; x++) {
        ctr = 0;
        for (var y = 0; y < arra1.length; y++) {
            if (arra1[x] === arra1[y]) {
                ctr += 1;
            }
        }
        if (ctr < 2) {
            result = arra1[x];
            break;
        }
    }
    return result;
}
console.log(findFirstNotRepeatedChar('abacsdfsdfddc'));

//#24. Write a JavaScript function to apply Bubble Sort algorithm.

function bubbleSort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//#25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

function LongestCountryName(countryName) {
    return countryName.reduce(function (lname, country) {
        return lname.length > country.length ? lname : country;
    },
        "");
}
console.log(LongestCountryName(["Australia", "Germany", "United States of America"]));

//#26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

function longestSubstringWithoutRepeatingCharacters(s) {
    var allCombo = [],
        hash = {},
        flag;

    // генерируем все комбинации подстрок исходной строки
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < s.length; j++) {
            if (j >= i) allCombo.push(s.slice(i, j + 1));
        }
    }

    // сортируем массив всех комбинаций по убыванию длины подстроки
    allCombo.sort(function (a, b) {
        return b.length - a.length;
    });

    // ищем максимальную строку без повторяющихся символов
    for (var i = 0; i < allCombo.length; i++) {
        flag = false; hash = {};

        // подсчитываем кол-во повторений каждого символа в подстроке
        allCombo[i].split('').forEach(function (elem) {
            hash[elem] = isNaN(hash[elem]) ? 1 : ++hash[elem];
            if (hash[elem] > 1 && !flag) flag = true;
        });

        if (!flag) return allCombo[i];
    }

}
console.log(longestSubstringWithoutRepeatingCharacters("developer.mozilla.org"));

console.log(longestSubstringWithoutRepeatingCharacters("learn.javascript.ru")); 

//#27. Write a JavaScript function that returns the longest palindrome in a given string.

function longestPalindrome(s) {
    var allCombo = [], currPalindrom;

    // генерируем все комбинации подстрок исходной строки
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < s.length; j++) {
            if (j >= i) allCombo.push(s.slice(i, j + 1));
        }
    }

    // сортируем массив всех комбинаций по убыванию длины подстроки
    allCombo.sort(function (a, b) {
        return b.length - a.length;
    });

    // ищем палиндром максимальной длины
    for (var i = 0; i < allCombo.length; i++) {
        currPalindrom = allCombo[i].split("").reverse().join(""); // переворачиваем подстроку

        // сравниваем перевернутую подстроку с оригинальной,  и если палиндром, то вернуть подстроку
        if (currPalindrom === allCombo[i])
            return allCombo[i];
    }
}
console.log(longestPalindrome('abracadacarba')); // abracadacarba
console.log(longestPalindrome('abracadabra')); // aca

//#28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function fcallback(n) {
    console.log(`Hi ${n}`);
}
function addStudent(id, f) {
    f(id);
}
addStudent('Vika', fcallback);

//#29. Write a JavaScript function to get the function name.

function abc() {
    console.log( arguments.callee.name );
    }
    abc();
    console.log(abc.name)
