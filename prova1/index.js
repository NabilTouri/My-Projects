console.log('open word')

const obj1 = {
    title: 'titolo oggetto 1',
    value: 5
}
obj1.title2 = 'titolo 2'

let obj2 = {...obj1}
obj2 = obj1

obj2.title2 = 'prova'

const sum = (num1, num2) => {
    return num1 + num2
}

function sum1(sum, num1, num2){
    return sum + num1 + num2
}
obj1.sum = sum

const arr1 = [5, 'titolo', obj1]

const num1 = 5
const num2 = 10

console.log(obj1.sum(num1, num2))

// console.log("somma = ", sum(num1, num2))
// console.log("somma = ", sum1(sum, num1, num2))