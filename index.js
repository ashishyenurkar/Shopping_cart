

const cartItems = [
    {
        id:0,
      name: "BBC micro:bit",
      image: "./img/microBit.jfif",
      price:1500
    },
    {id:1,
      name: "Arduino Uno R3 ",
      image: "./img/UNOR3.jfif",
      price: 1500
    }
];
 




  const cartGallery = document.getElementById("cart-gallery");

  // Update the cart gallery
function updateCartGallery() {
      const cartCount = document.getElementById("itmCount").innerText=`${cartItems.length} Items`
    // Remove all child elements from the cart gallery
    while (cartGallery.firstChild) {
      cartGallery.removeChild(cartGallery.firstChild);
    }

    // Loop through each cart item and create a div element for it
    cartItems.forEach(item => {
      // Create a div element for the item
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");

      // Add an image for the item
      const itemImg = document.createElement("img");
      itemImg.src = item.image;
      itemImg.alt = item.name;
      itemDiv.appendChild(itemImg);

      // Add the item name and price
      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
      itemDiv.appendChild(itemName);

      const itemPrice = document.createElement("p");
      itemPrice.textContent = `$${item.price.toFixed(2)}`;
      itemDiv.appendChild(itemPrice);

      // Add the remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        // Remove the item from the cartItems array
        const index = cartItems.indexOf(item);
        if (index > -1) {
          cartItems.splice(index, 1);
        }

        // Update the cart gallery
        updateCartGallery();
      });
        itemDiv.appendChild(removeBtn);
         // Add the buy now button
        
    const buyNowBtn = document.createElement("button");
        buyNowBtn.textContent = "Buy Now";
        buyNowBtn.addEventListener("click", () => {
            let query = encodeURIComponent(JSON.stringify(item));
            window.location.href = `buyPage.html?data=${query}`;
        })
    
    itemDiv.appendChild(buyNowBtn);

      // Add the item div to the gallery
        cartGallery.appendChild(itemDiv);
       
    });

   
  }

  // Call the updateCartGallery function to initially populate the cart gallery
  updateCartGallery();
  

  
 

