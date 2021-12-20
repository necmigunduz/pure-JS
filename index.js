async function fetchData(){
    await fetch("./product-list.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            let products = data.responses[0][0].params.recommendedProducts['Size Özel']
            console.log(products)
            const html = products.map(product => {
                return `
                <div class='container'>
                    <div class='row'>
                        <div class="card col-md-3 text-break fs-small">
                            <img src=${product.image} alt="Girl in a jacket" width="125" height="150" class="p-1 mx-auto mb-1">
                            <p>${product.name}</p>
                        </div>
                    </div>
                </div>
                `
            })
            .join("")
            document.querySelector('#main').insertAdjacentHTML("afterbegin", html)
            console.log(html)
        })
        .catch(error => {
            console.log(error)
        })
}

fetchData()
