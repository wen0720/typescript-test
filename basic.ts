import axios from 'axios'


// 1基本註解
const num1: number = 10
function identity (num: number): number {
    return num
}


// 2原始類型
let num2: number ;
let string2: string;
let true2: boolean;


// 3數組
let booleanArr: boolean[];
booleanArr = [true, false]
// booleanArr[2] = 'stringTxt' (不能賦予非布林值)


// 4接口
interface Name {
    firstName: string; 
    lastName: string;
}
let name: Name = {
    firstName: 'Tim',
    lastName: 'Chen'
}
// 若最上方沒有import axios，變數name就會因為重複宣告而報錯
// 重複宣告的原因是 typescript在全域的window中，已宣告name這個變數
// 且預設ts文件所有變數都是處於全域的，因此會重複宣告
// 但當文件有任何模塊的引用時（import，需處於文件根層次），
// 宣告的變數，就不在屬於全域


// 特殊類型
    // any(基本上就是叫typescript不要進行任何類型檢查)    
    let power: any 
    power = 5 // 可以賦值任意其他類型
    let test = power // 也可以被賦值

    // null / undefined

    // void 表示一個函數沒有返回的值
    

// 泛型
    function reverse<T>(arr: T[]): T[] {
        let tempArr = []
        for (let i=arr.length-1; i>=0; i--) {
            tempArr.push(arr[i])
        }
        return tempArr
    }

    let arrTypeNum = reverse<number>([1, 2, 3])
    console.log(arrTypeNum)
    // arrTypeNum=[1, '2', 5] 直接賦值會報錯，因為定義 number 型別

    let arrTypeString = reverse<string>(['1','2','3'])
    console.log(arrTypeString)


//  聯合類型
    function formatCommandLine (command: string[] | string ){
        if (typeof command === 'string'){
            command.trim()
        }else {
            command.join().trim()
        }
    }


// 交叉類型


// 元組類型


// 類型別名
type StrOrNum = string | number

let sample:StrOrNum = 5
let sample2:StrOrNum = '5'