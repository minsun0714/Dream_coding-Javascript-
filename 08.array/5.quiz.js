function replace(array,from,to){
const replaced = Array.from(array);
 for(let i=0;i<replaced.length;i++){
    if(replaced[i]===from){
        replaced[i]=to;
    }
    
}
return replaced;
}
const ddong = ['π', 'π', 'π', 'π'];
const result1 = replace(ddong,'π','π₯');
const result2 = replace(ddong,'π','π₯');
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
const result = count(['π', 'π₯', 'π', 'π₯'],'π₯');
console.log(result);

console.clear();



function match(array1,array2){
    let newArray=[];
for(let i=0;i<array1.length;i++){
        if(array2.includes(array1[i])){
            newArray.push(array1[i]); // push λμ  unshiftλ₯Ό λ£μΌλ©΄ ['π','π'] λμ¨λ€.
        }
    }

    return newArray;
}
console.log(match(['π', 'π₯', 'π'],['π', 'π', 'π','π']));