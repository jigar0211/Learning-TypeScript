// const stringEcho = (args: string): string => args
const echo = <T>(args: T): T => args
// you can also pas <T> to defing any type of variable

const isObj = <T>(args: T): boolean => {
    return (typeof args === 'object' && !Array.isArray(args) && args !== null)
}

console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1,2,3]));
console.log(isObj({name: 'John'}));
console.log(isObj(null));

const isTrue = <T>(args: T): {args: T, is: boolean} => {
    if (Array.isArray(args) && !args.length) {
        return {args, is: false}
    }
    if(isObj(args) && !Object.keys(args as keyof T).length) {
        return {args, is: false}
    }
    return {args, is: !!args}
}

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Jigar'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({name: 'Jigar'}));
console.log(isTrue([])); // modified
console.log(isTrue([1,2,3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

// Using Interface
interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBoolValue = <T>(args: T): BoolCheck<T> => {
    if (Array.isArray(args) && !args.length) {
        return {value: args, is: false}
    }
    if(isObj(args) && !Object.keys(args as keyof T).length) {
        return {value: args, is: false}
    }
    return {value: args, is: !!args}
}

// 2nd Example
//////////////////////////////////////


interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    // process the user with logic here 
    return user
}

console.log(processUser({ id: 1, name: 'Dave' }))
//console.log(processUser({ name: 'Dave'}))

///////////////////////////////////////


const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

class StateObject<T> {
    private data: T
    constructor(value: T) {
        this.data = value
    }
    get state(): T {
        return this.data
    }
    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject<string>("John")
console.log(store.state)
store.state = "Jigar"
// store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = (['Dave',42,true])
console.log(myState.state);