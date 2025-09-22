fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const cardContainer = document.querySelector(".Container");

    data.map((data) => {
      let card = document.createElement("div");
      card.classList.add("card");

      let cardImage = document.createElement("img");
      cardImage.src = data.image;
      cardImage.alt = data.title;
      card.appendChild(cardImage)

      let cardCategory = document.createElement("h3");
      cardCategory.classList.add("category");
      cardCategory.textContent = data.category;
      card.appendChild(cardCategory)

      let cardTitle = document.createElement("h2");
      cardTitle.classList.add("title");
      cardTitle.textContent = data.title;
      card.appendChild(cardTitle)

      let cardPrice = document.createElement("h3");
      cardPrice.classList.add("Price");
      cardPrice.textContent = `Price: ${data.price}`
      card.appendChild(cardPrice)

      let Buybtn = document.createElement('button')
      Buybtn.classList.add('Buybtn');
      Buybtn.textContent = "BUY NOW"
      card.appendChild(Buybtn)

      cardContainer.appendChild(card);
    });
  });
