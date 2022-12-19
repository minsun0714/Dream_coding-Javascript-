const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];

// for(let i=0;i<fruits.length;i++){
//     for(let j=0;j<fruits.length;j++)
//     if(i!=j && fruits[i] === fruits[j]){
//         fruits.splice(j, 1);
//     }
// }
// console.log(fruits);
//-------------------------------------------
const fruitsSet = new Set (fruits);
console.log([...fruitsSet]); // 스프레드 연산자 이용
//-------------------------------------------
function removeDuplication(array) {
    return [...new Set(array)];
}
console.log(removeDuplication(fruits));
//-------------------------------------------
console.clear();
const set1 = new Set([1,2,3,4,5]);
const set2 = new Set([1,2,3]);
const array1 = [...set1];
const array2 = [...set2];


function findIntersection(array1,array2) {
    
    return new Set([...set1].filter((num)=> set2.has(num)));
}

console.log(findIntersection(array1,array2));