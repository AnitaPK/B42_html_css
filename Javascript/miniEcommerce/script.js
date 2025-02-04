
let products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 5 },
    { id: 2, name: "Headphones", price: 200, category: "Electronics", stock: 15 },
    { id: 3, name: "T-shirt", price: 20, category: "Apparel", stock: 50 },
  ];
  
function setToLocal(p){
    localStorage.setItem('Procucts', JSON.stringify(p))
  }

// function getFromLocal(){
//         productsFromLocal = JSON.parse(localStorage.getItem('Procucts'))
// }

getFromLocal = () => JSON.parse(localStorage.getItem('Procucts'))

// console.log(productsFromLocal);
// console.log(typeof(productsFromLocal))

function renderList(filteredProducts){
    document.getElementById('productList').innerHTML=
    filteredProducts.map((product)=>`<div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button class="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
        
    `).join('')
}
function addProduct(){
    name1=document.getElementById('name').value
    price=document.getElementById('price').value
    category=document.getElementById('category').value
    stock=document.getElementById('stock').value

    const newProduct =
        { id: Date.now(), name: name1, price: price, category: category, stock: stock }
        console.log(newProduct)
    productsFromLocal.push(newProduct);
    setToLocal(productsFromLocal)
    renderList(getFromLocal())
    
}

filterProducts = ()=>{
    key = document.getElementById('filterKey').value;
    filteredProd = productsFromLocal.filter((p)=> key == p.name)
    console.log(filteredProd);
    renderList(filteredProd);
    
}


setToLocal(products);

productsFromLocal = getFromLocal();

renderList(productsFromLocal)
