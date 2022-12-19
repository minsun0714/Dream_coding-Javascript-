function replace(array,from,to){
const replaced = Array.from(array);
 for(let i=0;i<replaced.length;i++){
    if(replaced[i]===from){
        replaced[i]=to;
    }
    
}
return replaced;
}
const ddong = ['🍌', '🍓', '🍇', '🍓'];
const result1 = replace(ddong,'🍓','🥝');
const result2 = replace(ddong,'🍌','🥝');
console.log(result1);

console.log(result2);

console.clear();

function count(array, item){
    let counter = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]===item){
            counter++;
        }
    }
    return counter;
}
const result = count(['🍌', '🥝', '🍇', '🥝'],'🥝');
console.log(result);

console.clear();



function match(array1,array2){
    let newArray=[];
for(let i=0;i<array1.length;i++){
        if(array2.includes(array1[i])){
            newArray.push(array1[i]); // push 대신 unshift를 넣으면 ['🍇','🍌'] 나온다.
        }
    }

    return newArray;
}
console.log(match(['🍌', '🥝', '🍇'],['🍌', '🍓', '🍇','🍓']));