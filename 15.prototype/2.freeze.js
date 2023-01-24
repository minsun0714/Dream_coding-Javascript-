// 동결! Object.freeze 추가❌, 삭제❌, 쓰기❌, 속성 재정의❌
const ellie = { name: "엘리" };
const dog = { name: "와우", emoji: "🐶", owner: ellie };
Object.freeze(dog);
dog.name = "멍멍";
dog.age = 4;
delete dog.name;
console.log(dog);

// (단 얕은 꽁꽁 얼림이 된다.)
ellie.name = "엘리얌";
console.log(dog);

// 밀봉! Object.seal 값의 수정 ✅, 추가❌, 삭제❌, 속성 재정의❌
const cat = { ...dog };
Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = "냐옹";
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(dog));

console.log(Object.isFrozen(cat));
console.log(Object.isSealed(cat));

//확장 금지 preventExtensions 추가❌
const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(cat));
tiger.name = "어흐응~";
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 11;
console.log(tiger);
