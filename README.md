- created and array called items, inside the array I created 3 objects storing data about products
- first set a variable called myProducts
- you are only able to store data as strings so we need to convert items to a string by using JSON.stringify(items) and set that to a variable called myProducts
- next lets set this to local storage by using localStorage.setItem and lets call it 'products' and pass in the variable called myProducts
- next we need to create another variable called savedProducts and set it = to localStorage.getItem('products') but....
- this is now a string so we need to convert it back to a object by using JSON.parse(localStorage.getItem('products'))
