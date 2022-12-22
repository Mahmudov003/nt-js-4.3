// 2. Berilgan massivning faqat juft sonlardan iborat elementlaridan tashkil topgan
//  yangi massiv qaytaradigan funksiya yozing

function evensOnly(arr) {
    return arr.filter(elem => elem%2===0)
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
