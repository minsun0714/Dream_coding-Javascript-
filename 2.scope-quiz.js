{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  //   console.log(y);
}

const text = "global"; //전역변수, 전역 스코프, (글로벌 변수, 글로벌 스코프) (블럭 외부에 정의되어 있음.)
{
  const text = "inside block1"; // 지역 변수(로컬 변수), 지역 스코프(로컬 스코프) (블럭 내부에 있음.)
  {
    const text = "inside block2";
    console.log(text);
  }
}
