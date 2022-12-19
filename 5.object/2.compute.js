const obj = {
    name: '엘리',
    age: 20,
};
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(obj, key) {
return obj[key];

}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value){
    obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key){
    delete obj[key];
}
deleteKey(obj,"job");
console.log(obj);