async function fetchData(){
    await fetch("./product-list.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            let products = data.responses[0][0].params.recommendedProducts['Size Özel']
            console.log(products)
            const html = products.map(product => {
                return `<p>${product.name}</p>`
            })

            console.log(html)
        })
        .catch(error => {
            console.log(error)
        })
}

export { fetchData };
