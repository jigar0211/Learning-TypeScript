"use strict";
// Index Signatures 
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
//todaysTransactions.Pizza = 40
console.log(todaysTransactions['Dave']); // undefined
const student = {
    name: 'Dave',
    GPA: 3.5,
    classes: [1, 2, 3]
};
// console.log(students.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentkey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentkey(student, 'GPA');
const monthlyIncomes = {
    salary: 10000,
    income: 5000,
    bonus: 1000
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
