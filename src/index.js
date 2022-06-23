module.exports = function toReadable (number) {
    const arrNum = number.toString().split('')
    let sliceNum = +arrNum.slice(1).join('')
    let result
    
    const n1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const n2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const n3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty','sixty', 'seventy', 'eighty', 'ninety'] 

    if (arrNum.length === 1) {
        result = `${n1[number]}`
    } else if (arrNum.length === 2 && number < 20 && sliceNum !== 0) {
        result = `${n2[sliceNum - 1]}`
    } else if (arrNum.length === 2 && number > 20 && sliceNum !== 0) {
        result = `${n3[Math.trunc(number / 10) - 1]} ${n1[sliceNum]}`
    } else if (arrNum.length === 2 && number % 10 === 0) {
        result = `${n3[(number / 10) - 1]}`
    } else if (arrNum.length == 3 && sliceNum < 10 && sliceNum !== 0) {
        result = `${n1[Math.trunc(number / 100)]} hundred ${n1[number % 100]}`
    } else if (arrNum.length === 3 && sliceNum < 20 && sliceNum % 10 !== 0) {
        result = `${n1[Math.trunc(number / 100)]} hundred ${n2[(number % 100) - 11]}`
    } else if (arrNum.length === 3 && sliceNum > 20 && sliceNum % 10 !== 0) {
        result = `${n1[Math.trunc(number / 100)]} hundred ${n3[Math.trunc((number % 100) / 10) - 1]} ${n1[(number % 100) % 10]}`
    } else if (arrNum.length === 3 && number % 100 === 0) {
        result = `${n1[number / 100]} hundred`
    } else if (arrNum.length === 3 && sliceNum % 10 === 0) {
        result = `${n1[Math.trunc(number / 100)]} hundred ${n3[(sliceNum / 10) - 1]}`
    }

    return result.trim()
}