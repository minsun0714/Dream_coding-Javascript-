//let 재할당 가능
let a =1;
a=2;

// const 재할당 불가능
//1. 상수
//2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 안돼~~~
console.log(text);

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎',
};
// apple = {}; 안돼~~~~이건 apple이 가리키고 있는 메모리셀에 재할당하는 거잔아 안되지

console.log(apple);
apple.name = 'orange'; // 이건 apple 메모리셀의 주소를 따라가서 Heap 객체 안의 데이터를 변경하는 거라 갠춘
console.log(apple); 

