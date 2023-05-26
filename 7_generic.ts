const arrayOfNum: Array<number> = [1, 1, 2, 3, 5, 8]
const arrayOfStr: Array<string> = ['Hello', 'TS']
function reverce<T>(array: T[]): T[] {
    return array.reverse()
}

reverce(arrayOfNum)
reverce(arrayOfStr)