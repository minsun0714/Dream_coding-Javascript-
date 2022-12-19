// const multiple = {
//     [Symbol.iterator]() {
//         const max = 10;
//         let num = 0;
//         return {
//             next (){
//                 return { value: num++ *2 , done: num > max};
//             },
//         };
//     },
// };

// function* multipleGenerator() {

// }

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      yield i * 2; //return과 달리 사용자가 명령해야만 그 다음값 리턴해줌.
    }
  } catch (error) {
    console.log("요놈 잡았다!");
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);

// multiple.return();
multiple.throw("Error!!");

next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
