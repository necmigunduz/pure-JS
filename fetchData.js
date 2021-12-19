let products = []

async function fetchData(){
    await fetch("./product-list.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log(data.responses[0][0].params.recommendedProducts)
            products.push(data.responses[0][0].params.recommendedProducts)
        })
        .catch(error => {
            console.log(error)
        })
}

export { fetchData, products };
