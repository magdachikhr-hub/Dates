async function getProducts() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/locations");

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

    const { latitude, name, longitude, description } = product;

    card.innerHTML = `
  <p class="name">${name}</p>
 <span class="latitude">${latitude}</span>
 <span class="longitude">${longitude}</span>
  <p class="description">${description}</p>
      `;

    container.append(card);
  });
}

renderProducts();

const container = document.querySelector(".container");
