//내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
//캡슐화와 정보 은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}
const increase = makeCounter();
increase();
increase();
increase();
// 내가 은닉하고자 하는 데이터 상태 : let count = 0;
// 오직 public 함수만을 통해서 내부 데이터를 조작 가능하게 함.
// const counter = (function () {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function () {
//       changeBy(1);
//     },
//     value: function () {
//       return privateCounter;
//     },
//   };
// })();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.value());

class Counter {
  #count = 0;
  inc() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
