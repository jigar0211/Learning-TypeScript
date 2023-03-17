type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    album: stringOrNumberArray
}
type UserID = stringOrNumber // this representing TypeScript type

// interface postId = stringOrNumber // this will not work because interface more think about objects and functions
type postId = stringOrNumber

// Literal types
let myName : 'Jigar'
let username : 'jigar' | 'jay' | 'vipul'
username = 'jigar' // in this username varible only allow name that has been declared in variable

// Functions 
const add = (a: number,b: number) => {
    return a + b
}
console.log(add(10,20))

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('hello')
logMsg(add(2,3))

let subtract = function(c: number, d: number): 
number {
    return c - d
}
console.log(subtract(30,10))

interface mathFunction {
    (a: number, b: number): number
} 
let multiply: mathFunction = function(c,d) {
    return c * d
}
logMsg(multiply(2,2))

// Optional Parameters 
const addAll = (a: number, b: number, c?:number): number => {
    if(typeof c !== 'undefined'){
    return a + b + c
    }
    return a + b
}
const sumAll = (a: number = 10, b: number, c:number = 2): number => {
    return a + b + c
}
logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
logMsg(sumAll(undefined, 3));

// Rest Parameter
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}
logMsg(total(10,2,8))

// Never type
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}
// custome type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
    ? true : false
}
// use of the never type 
const numberOrString = (value: number | string): string => {
    if(typeof value == 'string') return 'string'
    if(typeof value == 'number') return 'number'
    return createError('This should never happen!')
}