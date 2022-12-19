class Worker {
    constructor(name,depart,workHour,payrate) {
        this.name = name
        this.depart = depart;
        this.workHour =workHour;
        this.payrate =payrate;

    }
    monthlyPay = () =>{
        let monthlyPay = this.payrate * this.workHour;
        console.log(monthlyPay);
        }
    }

class Regularworker extends Worker {
    static #payrate = 10000;
constructor (name,depart,workHour){
    super(name,depart,workHour,Regularworker.#payrate);

}
}
class Parttimeworker extends Worker {
    static #payrate = 8000;
    constructor (name,depart,workHour){
        super(name,depart,workHour,Parttimeworker.#payrate);
};
}

const Andy = new Regularworker('Andy', 'Marketing', 24);
//console.log(Andy);

const Becky = new Regularworker('Becky', 'Accounting', 56);
//console.log(Becky);

const Chris = new Parttimeworker('Chris', 'sales', 78);
//console.log(Chris);

const Dehrin = new Parttimeworker('Dehrin', 'management', 12);
//console.log(Dehrin);

const Eve = new Parttimeworker('Eve', 'production', 7);
//console.log(Eve);

Andy.monthlyPay();
Becky.monthlyPay();
Chris.monthlyPay();
Dehrin.monthlyPay();
Eve.monthlyPay();