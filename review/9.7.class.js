class Counter {
    constructor(startvalue){
        this.value = startvalue;
    }    
    
    increment = () =>{
        this.value++;
        console.log(this.value);
    };
}
    

const counter = new Counter(0);
console.log(counter);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value);