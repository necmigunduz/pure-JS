let products = []
let html = ``

async function fetchData(){
    await fetch("./product-list.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log(data.responses[0][0].params.recommendedProducts)
            products.push(data.responses[0][0].params.recommendedProducts)
            
            let html = `${products[0]['Size Özel'][0].name}`
            
            console.log(html)
            document.querySelector('#main').innerHTML = `
            <h2>Special Product</h2>
            <span>${html}</span>
            `
        })
        .catch(error => {
            console.log(error)
        })
}

export { fetchData, products, html };
