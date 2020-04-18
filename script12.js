
// 1. Есть объект "a" с набором свойств, объект "b" должен унаследовать свойства "a".  

class a {
    constructor(name) {
        this.month = 0;
        this.name = name;
    }
    learn(month) {
        this.month = month;
        console.log(`It will take ${this.month} month(s) to learn ${this.name}.`);
    }
    stop() {
        this.month = 0;
        console.log(`${this.name} learnt!`);
    }
}

// Наследуем от a указывая "extends a"
class b extends a {
    miss() {
        console.log(` The deadline to take ${this.name} exam in is soon!`);
    }
}

let language = new b("Java Script");

language.learn(1); // It will take 1 month(s) to learn Java Script.
language.miss(); // The deadline to take Java Script exam in is soon!
language.stop(); //Java Script learnt!

