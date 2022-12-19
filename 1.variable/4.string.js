// 문자열 타입
let string = "hihi";
let string2 =`안녕~!`;
console.log(string);
string = '"안녕"';
console.log(string);

// 특수문자 출력법
string = "'안녕'";
console.log(string);

string = '안녕!\n엘리야!\t\t내 이름은\\\u09AC';
console.log(string);


//템플릿 리터럴 ``
let id = "엘리";
let greetings = "hi" + id + "🛎️\n즐거운 하루";
console.log(greetings);

greetings = `안녕, ${id} 🎀
즐거우나루`
console.log(greetings);
