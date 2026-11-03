
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

// array and tuple and readonly modifier

const arr : string[] = ["munim", "is", "a", "good", "dev"]

// arr.push(124323) // give error
arr.push("say hi") // do not give error

const numArr : number[] = [1, 2, 3]

// generic array declaration
const stringArr : Array<string> = ["Programming", "coding"]

// tuple with readonly [tuple length is always fixed and every parameter datatype is fixed]
const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125]

// dhakaLatLong.push(3423423)
// dhakaLatLong[0] = 1324324 
// if we add readonly, we can not push or change the value in this tuple


// optional, default parameter

// optional
const concatName = (firstName: string, lastName?: string) => {
    if(!lastName){
        return firstName;
    }

    return firstName + " " + lastName;
}

console.log(concatName("munim"))
console.log(concatName("al", "munim"))
// console.log(concatName("shahan" ,"al", "munim"))

// default
const greet = (fullname: string, greeting: string = "Hello") : void => {
    console.log(greeting + " " + fullname);
}

greet("Munim")


// rest parameter (...args) or spread operator

const sum = (...numbers: number[]) => {
    return numbers.reduce((total, sum) => total + sum, 0)
};

sum(1, 2, 3, 4, 5, 6)

const logUserAction = (...args: [name: string, age: number, isActive: boolean]) => {
    const [name, age] = args;

    console.log("Name is : " + name)
}

logUserAction("Munim", 25, false)



// object type, type alias and interface

// type alias

type firstName = string;
type Address = {
        streetName: string;
        holdingNumber: number;
    }

type TUser = {
    name: firstName;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
    address: Address
}

const user: TUser = {
    name: "Munim",
    age: 2143,
    isActive: true,
    action: () => console.log("Create"),
    badges: ["abc", "def", "mno"],
    address : {
        streetName: "ABCD",
        holdingNumber: 234243
    }
}

// user.email = "munim@mail.com" 
// console.log(user.phone);
// show an error if any property does not exist on type

const user2: TUser = {
    name: "Rahim",
    age: 2234,
    isActive: true,
    action: () => console.log("Create"),
    badges: ["def", "mno", "rst"],
    address : {
        streetName: "ABCD",
        holdingNumber: 234243
    }
}


// interface
interface IUser {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
}

const user3: IUser = {
    name: "karim",
    age: 2164,
    isActive: true,
    action: () => console.log("Create"),
    badges: ["abc", "rdt", "uvw"],
}


// a simple diference in type alias and interface
type TUserName = string; // its working
// interface IUserName string // its not working
