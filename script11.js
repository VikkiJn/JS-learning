// Реализовать инкапсуляцию 

//Замыкание. Внутренняя функция имеет доступ к переменной Count и может возвращать его значения во внешний код, но пользователи функции useCounter не имеют прямого доступа к переменной Count.

function useCounter() {
    var Count = 1;

    return function () {
        return Count++;
    };
}

var counter1 = useCounter();
alert(counter1()); // 1
alert(counter1()); // 2
alert(counter1()); // 3

var counter3 = useCounter();
alert(counter3()); // 1

