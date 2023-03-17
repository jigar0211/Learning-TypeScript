class Coder {

    secondLang!: string

    constructor(
        public name: string,
        public music:string,
        private age:number,
        protected lang:string = 'TypeScript'
        ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
} 
const Jigar = new Coder('Jigar', 'Rock',20)
console.log(Jigar.getAge())
// console.log(Jigar.age)
// console.log(Jigar.lang)

// Extend Class

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I Write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 20)
console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);

////////////////////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}
class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} plays ${action}`
    }
}

const Page = new Guitarist('John', 'Piano')
console.log(Page.play('guitar'))

////////////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    } 
    public id: number
    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Jay = new Peeps('Jay')
const Vipul = new Peeps('Vipul')

console.log(John.id);
console.log(Jay.id);
console.log(Vipul.id);

console.log(Peeps.count);

////////////////////////////////////////////////////
class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value
            return
        } else throw new Error("Param is not an array of String");
    }
}

const MyBands = new Bands()
MyBands.data = ['Sanam', 'One-Direction', 'Imagine Dragons']
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data);
MyBands.data = ['Van Halen', '5150']