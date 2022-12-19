function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error("callback함수를 전달해야 함");
  }
  if (!seconds || seconds < 0) {
    throw new Error("0초보다 작으면 어켕~");
  }

  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log("띵띵똥똥");
  }, -2);
} catch (error) {
  console.log("에러발생 띠용띠용");
}
