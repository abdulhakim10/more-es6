//1.var let const
// braeak up with var
const numbers = [12, 45, 55, 66];
let salary = 15000;
salary = 20000;


//2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}


// 3. tamplate string
const elementHTML = `
<div>
<h3>Name: </h3>
<p>Address: </p>
<p>Salary: ${calculateSalary(10000, 0, 0)}</p>
<p>Others: ${numbers[2]}</p>
</div>`


// 4. arrow function
// const doubleIt = x = x * 2;
// const calculateSalary = (salary, tax, bonus) => salary - salary * tax + bonus;


// 5.spread
const ages = [12, 34, 56, 67, 78];
const newAges = [...ages, 45, 66,];


// 6.destructuring
const { x, y, z, ...c } = { x: 45, y: 34, z: 23, name: 'sakib', salary: 4500000 };
const [a, b, ...r] = [45, 67, 99, 79,];