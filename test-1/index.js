// 1. Berilgan sonlar massividan berilgan sondan kattalarini qaytaruvchi funksiya yozing.
function fiveAndGreaterOnly(arr, min) {
  return  arr.filter((elem)=> elem>min)
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2], 5)); /// [6, 8]
