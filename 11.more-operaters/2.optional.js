// 옵셔널 체이닝 연산 Optional chaining Operator
// ES11(ECMAScript) 
// null 또는 undefined을 확인할 때 
let item = {price: 1};
const price = item && item.price;
console.log(price);
// &&를 ?.를 이용하여 아래와 같이 써도 무방
let item = {price: 1};
const price = item?.price;
console.log(price);

let obj = {name: '🐶', owner: {name: '엘리'}};
function printName(obj){
const ownerName = obj && obj.owner && obj.owner.name;
console.log(ownerName)
}
printName();

// 역시 아래와 같이 쓸 수 있음.
let obj = {name: '🐶', owner: {name: '엘리'}};
function printName(obj){
const ownerName = obj?.owner?.name;
console.log(ownerName)
}
printName();