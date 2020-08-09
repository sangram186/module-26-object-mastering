const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 18000
}

// normalPerson.chargeBill();

// ## ===>> Bind function
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonBill(2300)
// console.log(friendlyPerson.salary);

// heroChargeBill(2000);
// console.log(heroPerson.salary)

//## ===>> Call function
// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// console.log(heroPerson.salary);

// ## ===>> Apply function
normalPerson.chargeBill.apply(heroPerson, [5000, 800, 200]);
console.log(heroPerson.salary);