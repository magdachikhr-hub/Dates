//API

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function renderProducts() {
  const products = await getProducts();

  console.log(products);

  products.forEach((product) => {
    console.log(product);
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const { image, title, price, rating, category, description } = product;

    card.innerHTML = `
    <img class="product_img" src="${image}" alt="" />
<p class="title">${title}</p>
<div class="info">
  <span class="price">$${price}</span>
  <span class="category">${category}</span>
</div>
<div class="rating">
  <span class="score">${rating.rate}</span>
  <span class="count">${rating.count}</span>
</div>
<p class="description">${description}</p>
    `;

    container.append(card);
  });
}

renderProducts();

const container = document.querySelector(".container");
