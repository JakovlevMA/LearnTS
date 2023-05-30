let promise: Promise<number> = new Promise(resolve => {
    setTimeout(() => {
        resolve(42)
    }, 2000)
});

promise.then(data => {
    console.log(data.toFixed())
})

function mergeObjects<T, R>(a: T, b: R) {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Misha'}, {age: 23})
console.log(merged)

// ===============================

interface I {
    length: number
}
function withCount<T extends I>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}

console.log(withCount('Узнаю, сколько символов в данном предложении'))

// ===============================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: 'Misha',
    age: 22,
    job: 'Bank',
}

console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
console.log(getObjectValue(person, 'job'))

// ===============================

class Collection<T extends string | number | boolean> {
    constructor(private _items: T[] = []) {
    }
    add(item: T) {
        this._items.push(item)
    }
    remove(item: T){
        this._items = this._items.filter(i => i !== item)
    }
    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['I', 'love', 'you'])
strings.add('beer')
strings.remove('you')
console.log(strings.items)

// ===============================

interface Car {
    model: string
    year: number
}
function createAndValidateCar(model: string, year: number) {
    const car: Partial<Car> = {}
    if (model.length > 3 && year > 2000) {
        car.model = model
        car.year = year
    }
    return car as Car
}

const cars: Readonly<Array<string>> = ['Ford', 'Audi']
const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020,
}