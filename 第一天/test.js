// 随机生成一个2-32的五位数组

let array = []

function getNum() {
    return Math.floor(Math.random() *31 + 2)
}
function getArray() {
    for (let i = 0; i < 5; i++) {
        array[i] = getNum()
    }
    console.log("kkkkkkk", array)
}
getArray()