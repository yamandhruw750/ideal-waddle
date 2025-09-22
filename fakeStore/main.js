const cardContainer = document.querySelector(".cardContainer");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.map((data) => {
      console.log(data);
      let card = document.createElement("div");
      card.classList.add("productCard");
      card.innerHTML = `<div class="imageContainer">
          <img src="${data.image}" alt="${data.title}" id="productImage" />
        </div>
        <div class="productContent">
        <p id="productCategory">${data.category}</p>
          <h2 id="productTitle">${data.title}</h2>
          <h3 id="productPrice">\$ ${data.price}</h3>
          <button class="addToCartButton">Add to Cart</button>
        </div>`;

      cardContainer.appendChild(card);
    });
  });
