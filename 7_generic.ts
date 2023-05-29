const arrayOfNum: Array<number> = [1, 1, 2, 3, 5, 8]
const arrayOfStr: Array<string> = ['Hello', 'TS']
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNum)
reverse(arrayOfStr)

// ======================== //Дженерик тип для промиса

let promise: Promise<number> = new Promise(resolve => {
    setTimeout(() => {
        resolve(42)
    }, 2000)
})

promise.then(data => {
    console.log(data.toFixed())
})