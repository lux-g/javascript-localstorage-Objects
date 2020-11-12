const items = [
    {name: 't-shirt', info: 'gray t-shirt', price: 20.00},
    {name: 'hoodie', info: 'black hoodie', price: 50.00},
    {name: 'jeans', info: 'blue jeans', price: 40.00}
];

localStorage.setItem('products', JSON.stringify(items));

let myProducts = JSON.parse(localStorage.getItem('products'));

console.log(myProducts)
