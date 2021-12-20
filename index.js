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
                    <div class="card col-md-2 text-break fs-small m-1">
                        <img src=${product.image} alt="Girl in a jacket" width="100" height="120" class="p-1 mx-auto mb-1">
                        <p class="mb-5">${product.name}</p>
                        <button type='button' class='btn btn-success'>Sepete ekle</button>
                    </div>
                `
            })
            .join("")
            const main = document.querySelector('#main')
            const container = document.createElement("div")
            container.setAttribute("class","container")
            container.setAttribute("class", "mt-5 mx-5")
            const row = document.createElement("div")
            row.setAttribute("class","row")
            container.appendChild(row)
            main.appendChild(container)
            row.insertAdjacentHTML("afterbegin", html)
        })
        .catch(error => {
            console.log(error)
        })
}

fetchData()
