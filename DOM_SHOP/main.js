const container = document.querySelector(".container");
const filterBtn = document.querySelector(".filter");
const resetBtn = document.querySelector(".reset_btn");

//

let productsArr = [];

async function getProducts() {
  try {
    const response = await fetch(
      "https://api.everrest.educata.dev/shop/products/all",
    );

    const data = await response.json();
    console.log(data);
    // renderProducts(data.products);
    productsArr = data.products;
    renderProducts(productsArr);
    // return data.products;
  } catch (error) {
    console.log(error);
  }
}
getProducts();

function renderProducts(products) {
  console.log(products);

  products.forEach((product) => {
    console.log(product);
    // productsArr.push(product);
    console.log(products);

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const { price, images, title, brand, stock, description } = product;

    card.innerHTML = `
    <h2 class="brand">${brand}</h2>
    <img  class="img" src="${images[0]}" alt="" />
    <p class="name">${title}</p>
    <div>
    <span class="price">$${price.current}</span>
     <span class="price">${price.currency}</span>
     </div>
    <p class="description">${description}</p>
    <span class="stock">stock ${stock}</span>
    `;

    container.append(card);
  });
}

filterBtn.addEventListener("click", () => {
  container.innerHTML = "";
  const filteredProducts = productsArr.filter((product) => {
    return product.price.current < 300;
  });
  renderProducts(filteredProducts);
});

resetBtn.addEventListener("click", () => {
  container.innerHTML = "";
  renderProducts(productsArr);
});
