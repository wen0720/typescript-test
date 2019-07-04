class Student {
    fullName: string;
    constructor(public firstName: string, public  middleInitial: string, public lastName: string){
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeterFuc(person: Person){
    return "Hello, " + person.firstName + person.lastName
}

let user = new Student('Chen', 'Wen', 'Shian');

document.body.innerHTML = greeterFuc(user);

//=================//

// Array 
let list: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];

// number
let decimal: number =  6;
let hex: number = 0xf00d;
let binary: number = 0b1010; // binary 2進位
let octal: number = 0o744; // octal 10進位

// boolean
let isDone: boolean
isDone = false

let x: any = 100

let myFavoriteNumber: string | number  // 可以是string 或 number類型


// 接口：後續let出來的變量，需要與定義時的屬性完全一致。
interface test {
    readonly id: number;
    name: string;
    age: number;
    gender: string;
    love?: null // ?代表可選屬性，該屬性可以不存在
}

let person: test = {
    id: 5,
    name: 'ton',
    age: 17,
    gender: 'boy',
    love: null
}

let fibonacci: number[] = [1, 1, 2, 3, 5]
let arr: Array<number> = [1, 2, 3, 4, 5]

let txtNumArr: (number | string)[] = [1, '2', 3, '5', 9]
