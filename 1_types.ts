// Булиан типы --->
const isFetching: boolean = true
const isLoading: boolean = false

// Числовые типы --->
const int: number = 42 // Целочисленное
const float: number = 4.2 // Дробное
const overNum: number = 3e10 // Огромное

// Строковый тип --->
const massage: string = 'Hello TS'

// Тип массив --->
const numArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const words: string[] = ['Hello', 'TS']

// Тип Tuple
const contact: [string, number] = ['Ann', 1234567890]

// Тип Any
let variable: any = 42
variable = []

// ==========
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Хайзенберг')

// Тип Never
function throwError(massage: string): never {
    throw new Error(massage)
}
function infinite(): never {
    while (true) {

    }
}

// Тип Type --- собственный тип
type Login = string
const login: Login = 'admin'
type ID = string | number
const id1: ID = 123
const id2: ID = '123'
type SomeType = string | null | undefined