function multiply(num){
   console.log(num);
}

function double(num){
    console.log(2*num);

}

function iterate(max,action){
for(let i=0;i<max;i++){
    action(i);
}
}
iterate(5,multiply);
iterate(5,double);
