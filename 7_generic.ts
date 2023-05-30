const arrayOfNum: Array<number> = [1, 1, 2, 3, 5, 8]
const arrayOfStr: Array<string> = ['Hello', 'TS']
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNum)
reverse(arrayOfStr)

