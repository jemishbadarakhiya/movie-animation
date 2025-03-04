const products = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics" },
    { id: 2, name: "Phone", price: 500, category: "Electronics" },
    { id: 3, name: "Shoes", price: 100, category: "Fashion" },
    { id: 4, name: "Watch", price: 200, category: "Fashion" },
    { id: 5, name: "Headphones", price: 150, category: "Electronics" }
];

// 1
products.forEach(function(item){
    console.log('Item Name: ', item.name)
})
// 2
const finditem = products.filter(item => item.name === "Watch")
console.log('Find Item', finditem)
// 3
let uniqueitems = []
products.forEach(function(item){
    let arritem = item.category;
    // console.log('arritem', arritem)
    if (!uniqueitems.includes(arritem)){
        uniqueitems.push(arritem)
    }
})
console.log('uniqueitem', uniqueitems)
// 4
products.forEach(function(item){
    if(item.category === 'Electronics') {
        console.log('Electronics Category Item: ', item)
    }
})
// 5
products.forEach(function(item){
    // let itemcost = 500;
    if(item.price > 300) {
        console.log('Item price more than 300:', item)
    }
})
// 6
products.forEach(function(item){
    let itemcost = item.price
    if(itemcost === 100){
        console.log('Yes, item price is 100: is item ', item)
    }
})
// 7
let productnames = []
products.forEach(function(item){
    let productname = item.name;
    productnames.push(productname)
})
console.log('productnames', productnames)
// change
// 8

