function runInDelay(callback, seconds) {
  if (seconds < 0) {
    throw Error;
  }
  setTimeout(callback, seconds * 1000);
}
runInDelay(() => {
  console.log("쫜~!");
}, 3);

// setInterval(() => console.log(new Date().toString()), 2000);
// setTimeout(() => console.log("쫜~!"), 3000);
