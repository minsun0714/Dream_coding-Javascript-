const text = "Hello World!".split('');
for(let i=0;i<text.length;i++){
        console.log(text[i]);
    }

const ids = 'user1, user2, user3, user4';
console.log(ids.split(', '));


dateAndClock=()=>{
let now = new Date();
console.log(now.toLocaleString('ko-KR'));
}

setInterval(dateAndClock,1000);
