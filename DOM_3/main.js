async function getProducts() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

getProducts();

async function renderProducts() {
  const products = await getProducts();

  console.log(products);

  products.forEach((product) => {
    console.log(product);
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const {
      images,
      title,
      price,
      category,
      description,
      creationAt,
      slug,
      updatedAt,
    } = product;

    console.log(images);

    card.innerHTML = `
      <p class="title">${title}</p>
<img class="imgs" src="${images[0]}" alt="" />
<span class="price">${price}</span>
<p class="description">${description}</p>
<span class="category">${category}</span>
<div class="create_update">
  <span class="creation">${creationAt}</span>
  <span class="updated">${updatedAt}</span>
</div>
<span class="slug">${slug}</span>
      `;

    container.append(card);
  });
}

renderProducts();

const container = document.querySelector(".container");
