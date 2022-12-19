// 나의 풀이
const array = ['🍌', '🍓', '🍇', '🍓'];
result = array.map(item => {
    if(item === '🍓'){
        return '🥝';
    } else{
        return item;
    }
});
console.log(result);


//엘리 풀이
function replace(array,from,to){
return array.map(item=>item ===from? to : item)};

    const ddong = ['🍌', '🍓', '🍇', '🍓'];
    const result1 = replace(ddong,'🍓','🥝');
    console.log(result1);
    
    

//--------------------------------------------------

//나의 풀이
const array_ = [['🍌', '🥝', '🍇', '🥝'],'🥝'];
const newArray = array_.flat().slice(0,4);
result = newArray.filter((item)=> item === "🥝");
console.log(result.length);

// 엘리 풀이
function count(array, item) {
    return array.filter((value) => value === item).length};
    console.log(count(['🍌', '🥝', '🍇', '🥝'],'🥝'));


// 엘리 풀이
function count(array, item) {
    return array.reduce((count, value) => {
        if (value === item) {
            count++;
        }
        return count;
    },0);
}
console.log(count(['🍌', '🥝', '🍇', '🥝'],'🥝'));
//----------------------------------------------------
//나의 풀이
const array1 = ['🍌', '🥝', '🍇']
const array2 =  ['🍌', '🍓', '🍇', '🍓'];

result = array1.filter((item) => array2.includes(item));
console.log(result);

//엘리 풀이
function match(input, search) {
    return input.filter((item)=> search.includes(item));
}
console.log(match(['🍌', '🥝', '🍇'],['🍌', '🍓', '🍇', '🍓']));
//----------------------------------------
//나의 풀이
const nums = [3, 16, 5, 25, 4, 34, 21];
result = nums.filter((item)=> item >5);
answer = result.reduce((sum, value) => (sum += value),0);
console.log(answer/result.length);

// 엘리 풀이
const nums2 = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums//
.filter((num) => num>5)//
.reduce((avg, num, _,array)=> avg + num/array.length,0);
console.log(result2);