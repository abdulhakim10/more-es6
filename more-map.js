const friends = ['Shahalam Sharif', 'Omayer Khan', 'Ameer', 'Nesar'];
const firstLetters = friends.map(x => x[0]);
const nameLength = friends.map(x => x.length);
console.log(firstLetters);
console.log(nameLength);

const products = [
    { id: 1, name: 'phone', price: 160000 },
    { id: 1, name: 'watch', price: 60000 },
    { id: 1, name: 'airpod', price: 6000 },
    { id: 1, name: 'tablet', price: 76000 },
];

const names = products.map(x => x.name);
const price = products.map(x => x.price);
console.log(price);
console.log(names)