const fruits = ['๐', '๐', '๐', '๐'];

// ๋ฐฐ์ด ์์ดํ์ ์ฐธ์กฐํ๋ ๋ฐฉ๋ฒ
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i=0;i<fruits.length; i++) {
    console.log(fruits[i]);
}

//์ถ๊ฐ, ์ญ์  - ์ข์ง ์์ ๋ฐฉ์ ๐ฉ
fruits[fruits[3]] = '๐';

//fruits[fruits.length] = '๐';// ๊ด์ฐฎ์ ๋ฐฉ์
console.log(fruits);

delete fruits[1];
console.log(fruits);
console.log(fruits);