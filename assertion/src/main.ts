type one = string
type two = string | number
type three = 'hello'

// convert more or less specific
let a: one = 'Hello'
let b = a as two // Less Specific Type
let c = a as three // More Specific

let d = <one>'World'
let e = <string | number>'World'

const addOrConcat = (a: number, b: number,c: 'add' | 'concat'): number | string =>{
    if(c === 'add') return a + b
    return '' + a + b
}

let myVAl: string = addOrConcat(2,2,'concat') as string
// ST sees no problem - but a string is returned
let nextVAl: number = addOrConcat(2,2,'concat') as number

// 10 as string
// this is right way to declear 10 as string
(10 as unknown) as string

// The Dom
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src
