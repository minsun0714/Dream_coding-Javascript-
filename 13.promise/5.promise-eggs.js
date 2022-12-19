function fetchEgg(chicken) {
  return Promise.resolve(`${chicken}=>🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg}=>🍳`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가져올 수 없음"));
  //   return Promise.resolve(`🪴=>🐓`);
}

getChicken() //
  .catch((error) => {
    console.log(error.name);
    return "대체🐔";
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((friedegg) => console.log(friedegg));

//----------------코드를 심플하게 만들어보자.
getChicken() //
  .catch(() => "대체🐔")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
