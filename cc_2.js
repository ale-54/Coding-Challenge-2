//Task 1 - Store Inventory
let products = [`Chicken`, `Book`, `Shirt`, `Hand Sanitizer`, `Sticker`];
products.push(`Wallet`); //adding a new product
products.pop(); //removing the last product
console.log(products);

//Task 2 - Student Scores
let scores = [12, 87, 64, 0, 37]
scores[1] = 91;
let total = scores.reduce((sum, score) => sum + score, 0);
let averageScore = total / scores.length;
console.log(`Updated Scores:`, scores);
console.log(`Average Score:`, averageScore);

//Task 3 - Employee Records
let employee = {
    name: `Mofu Sand`,
    age: 2,
    department: `Finance`,
    isActive: true
};
employee.department = `Human Resources`;
employee.position = `Human Resources Administrator`;
console.log(`Updated Employee Records`, employee);

//Task 4 - Customer Database
let customers = [
    {name: `Mother Ho`, email: `motherlove76@gmail.com`, purchaseAmount: 2000},
    {name: `Father Le`, email: `fatherlord81@gmail.com`, purchaseAmount: 36},
    {name: `Ross Red`, email: `redross01@gmail.com`, purchaseAmount: 69}
];
customers.push({name: `Dokja Kim`, email: `dkosgyattebayo4951@gmail.com`, purchaseAmount: 9999999});
console.log(`Customers List:`, customers);