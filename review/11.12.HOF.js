function replace(array,from,to) {
    return array.map((item)=> 
    item === from ? to : item   
    )
}

console.log(replace(['🍌', '🍓', '🍇', '🍓'],'🍓','🥝'));



function count(array, item) {
    result = array.filter((value)=>value===item)
    return result.length;
}
console.log(count([ '🍌', '🥝', '🍇', '🥝' ], '🥝')); 



function common(array1,array2) {
    result = array1.filter((item)=>array2.includes(item))
    return result;
    }

console.log(common(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));




const nums = [3, 16, 5, 25, 4, 34, 21];
result = nums.filter((value) =>  value>5 )
.reduce((avg,value,_,array)=> avg + value/array.length,0);
console.log(result);