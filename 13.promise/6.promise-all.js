function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("๐");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("๐");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

// ๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ง๊ณ  ์ค๊ธฐ(4์ด ๊ฑธ๋ฆผ!)
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [apple, banana])
  )
  .then(console.log);

// Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits));

// Promise.race ์ฃผ์ด์ง Promise ์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋ ๊ฒ์ด ์ด๊น!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race", fruit));

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-settle", fruits))
  .catch(console.log);
