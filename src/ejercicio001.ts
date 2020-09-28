console.log('Hola mundo')

function sumar (a: number, b: number) {
    return a + b
}

console.log(sumar(3, 4))

let restar = (a: number, b: number) => a - b
console.log(restar(3, 4))

let multiplicaRaro = (a: number, b: number): number => {
    let r: number
    let h: number
    r = 4
    let r2 = a * b + r
    return r2
}
console.log(multiplicaRaro(3, 4) + 5)
