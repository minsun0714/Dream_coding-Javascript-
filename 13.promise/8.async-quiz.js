function fetchEgg(chicken) {
  return Promise.resolve(`${chicken}=>π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg}=>π³`);
}

function getChicken() {
  return Promise.reject(new Error("μΉν¨μ κ°μ Έμ¬ μ μμ"));
  //   return Promise.resolve(`πͺ΄=>π`);
}

//   getChicken() //
//     .catch((error) => {
//       console.log(error.name);
//       return "λμ²΄π";
//     })
//     .then((chicken) => {
//       return fetchEgg(chicken);
//     })
//     .then((egg) => fryEgg(egg))
//     .then((friedegg) => console.log(friedegg));

//   //----------------μ½λλ₯Ό μ¬ννκ² λ§λ€μ΄λ³΄μ.
getChicken() //
  .catch(() => "λμ²΄π")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
//-------------------Quiz: async/awaitλ‘ λ°κΏλ³΄μ.
async function egg() {
  try {
    const chicken = await getChicken();
  } catch (error) {
    const egg = await fetchEgg("λΈλΌμ§π");
    const friedegg = await fryEgg(egg);
    return friedegg;
  }
}

egg().then(console.log);
