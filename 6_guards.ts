function strip(x: string | number) {
    if (typeof x === "number") {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponce {
    header = 'responce header'
    result = 'response result'
}
class MyError {
    header = 'error header'
    message = 'error message'
}
function handle (res: MyResponce | MyError) {
    if (res instanceof MyResponce) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

// =====================================

type AlertType = 'sucsess' | 'danger' | 'warning'

function setAlertType(type: AlertType){

}
setAlertType('sucsess')
setAlertType('danger')
// setAlertType('default') // Ошибка
