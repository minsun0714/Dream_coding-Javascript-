// 접근자 프로퍼티 (Accessor Property)
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        //this.fullName = `${this.lastName} ${this.firstName}`;
    }
    get fullName () {  //게터
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value) {
        console.log('set', value);
    }
}

const student = new Student('수지','김');
student.firstName = "안나";
console.log(student.firstName);
console.log(student.fullName);
//get을 써서 함수 호출하는 것처럼 호출하지 않고 속성에 접근하듯 만들 수 있음.
//get을 안 쓰면 함수 호출 시 console.log(student.fullName())으로 해야함!

student.fullName = '김철수';
