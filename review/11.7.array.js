function replace(array,from,to) {
    const replaced = Array.from(array);
    for(let i=0; i<array.length;i++){
        replaced[i]=array[i]=== from ?  to : array[i];
    } return replaced;
}

console.log(replace(['🍌', '🍓', '🍇', '🍓'],'🍓','🥝'));

function count(array, item) {
    let counter =0
    for(let i=0 ; i<array.length; i++){
        if(array[i]===item){
            counter++;
        }
    } return counter++
}
console.log(count([ '🍌', '🥝', '🍇', '🥝' ], '🥝')); 
 
function common(array1,array2) {
    let arrayCommon = []; 
    for(let i=0;i<array1.length;i++){  
        if(array2.includes(array1[i])){
            arrayCommon.push(array1[i]);
        }   
    }return arrayCommon;
    }


console.log(common(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));