// Завернуть в try catch 1/0 и вывести на ноль делить нельзя  

function devide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot be divided by zero")
        }
        else { return ( a / b );
        }
    }
    catch (e) {
        console.log(e);
    }
}
devide(1, 0);


