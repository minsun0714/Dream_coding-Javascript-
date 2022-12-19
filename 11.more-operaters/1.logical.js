// 논리연산자 Logical Operator 
// && 그리고 
// || 또는  
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶'};
const obj2 = { name: '🐱', owner: 'Ellie'};

if(obj1 || obj2) {
    console.log('둘 다 true');
}

let result = obj1 && obj2; // obj1이 true일 경우 result에 obj2를 할당.(result가 obj2에 의존하게 됨.)
console.log(result);

result = obj1 || obj2; // obj1이 true일 경우 result에 obj1을 할당.(obj2는 볼 것도 없이 result가 참이 됨.)
console.log(result);

// 활용예
// && 조건이 truthy일 때, 무언가를 해야 할 경우
// || 조건이 falsey일 때, 무언가를 해야 할 경우

function changeOwner(animal) {
    if(!animal.owner){
        throw new Error('주인이 없어');
    }
    animal.owner = '바뀐 주인';
}

function makeNewOwner(animal) {
    if(animal.owner){
        throw new Error('주인이 있어');
    }
    animal.owner = '새로운 주인';
}


obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

//null 또는 undefined인 경우를 확인할 때
let item;// = {price: 1};
const price = item && item.price;
console.log(price);

// 기본값을 설정
// ||값이 falsey한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
    const text = message || 'Hello';
    console.log(text);
}
print();
print(undefined);
print(null);
print(0);

//Default parameter 설정하면 되지 않나염? 
//Default parameter: 전달하지 않거나, undefined일 때 설정
function print(message = 'Hello') {
    const text = message
    console.log(text);
}
print();
print(undefined);
print(null);
print(0);

//