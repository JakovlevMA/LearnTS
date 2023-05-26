interface Rect {
   readonly id: string
   color?: string
   size: {
     width: number
     height: number
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        width: 10,
        height: 20
    }
}
rect1.color = '#ccc'

const rect2: Rect = {
    id: '123',
    size: {
        width: 10,
        height: 20
    },
    color: '#ccc'
}

const rect3 = {} as Rect
const rect4 = <Rect> {}

// Наследование

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea (): number {
        return this.size.height * this.size.width
    }
}

// Классы

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date) {
        this.time = date
    }
}

// Множество динамических ключей

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
