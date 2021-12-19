import { fetchData, products } from './fetchData.js'

fetchData()
console.log(products)
let html = products.map((product) => {
    return (
    `<p>Name: ${product.name}</p>`
)
})

console.log(html)
let main = document.querySelector('#main')




