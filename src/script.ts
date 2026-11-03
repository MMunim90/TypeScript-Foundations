
let newString = "this is dev" // implicitly
let myString: string = "mmunim" // explicitly
let myNumber: number = 243234
let myBoolean: boolean = true
let mySymbol: symbol = Symbol()
let myBigInt: bigint = 99n

const addTwo = (a:number, b:number) : number => {
    return a + b;
}

console.log(addTwo(10, 20))
console.log(addTwo(50, 20))
console.log(addTwo(90, 20))


function greeting(greet:string) {
    return "Hi " + greet + " Welcome!"
}

console.log(greeting("Munim"))