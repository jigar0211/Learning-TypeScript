"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Jigar = new Coder('Jigar', 'Rock', 20);
console.log(Jigar.getAge());
// console.log(Jigar.age)
// console.log(Jigar.lang)
// Extend Class
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I Write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 20);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays ${action}`;
    }
}
const Page = new Guitarist('John', 'Piano');
console.log(Page.play('guitar'));
////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Jay = new Peeps('Jay');
const Vipul = new Peeps('Vipul');
console.log(John.id);
console.log(Jay.id);
console.log(Vipul.id);
console.log(Peeps.count);
////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of String");
    }
}
const MyBands = new Bands();
MyBands.data = ['Sanam', 'One-Direction', 'Imagine Dragons'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
MyBands.data = ['Van Halen', '5150'];
