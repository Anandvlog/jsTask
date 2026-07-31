let seacrhInput = document.querySelector("#search");
let productCard = document.querySelector("#product_card");

// product data
const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Electronics",
    price: 69999,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Electronics",
    price: 74999,
  },
  {
    id: 3,
    name: "Nike Air Max",
    category: "Shoes",
    price: 8999,
  },
];

seacrhInput.addEventListener("input", (e) => {
    
  let search = e.target.value.toLowerCase();

  productCard.innerHTML = "";

   if(search ===""){
    return
   }


  let filterProduct = products.filter((productData) => {
    return (
      productData.name.toLowerCase().includes(search) ||
      productData.category.toLowerCase().includes(search)
    );
  }); 

  
  if (filterProduct.length === 0) {
    productCard.innerHTML = "<p>Product not found</p>";
    return;
  }


  let searchData = () => {
    filterProduct.forEach((val) => {
      productCard.innerHTML += `
          <div class="card">
            <h2 title="name">${val.name}</h2>
            <p title="category">${val.category}</p>
            <span title="price">${val.price}</span>
            <div>
          `;
    });
  };
  searchData();
});
