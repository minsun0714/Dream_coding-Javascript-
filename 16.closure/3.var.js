function loop() {
  const array = [];
  for (var i = 0; i < 5; i++) {
    console.log(i);
    array.push(function () {
      console.log(i);
    });
  }
  console.log(i);
  console.log("-------");
  return array;
}
const array = loop();
array.forEach((func) => func());
