function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000); //3까지 출력 후 3초 끝나면 task queue에 들어간다. call stack 비어있을 때 2 반환.
  console.log("3");
}

execute();
