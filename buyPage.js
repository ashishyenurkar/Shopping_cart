// Get the query string parameter 'data'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dataParam = urlParams.get('data');

// Decode and parse the 'data' parameter
const decodedData = decodeURIComponent(dataParam);
const productDetail = JSON.parse(decodedData);

// Now you can use the 'shippingAddress' object as needed
const product = document.getElementById("product-detail");

function productDisplay(productDetail) {
// Create a new div element
const productDiv = document.createElement('div');

// Create a new img element and set its properties
const productImg = document.createElement('img');
productImg.src = productDetail.image;
productImg.alt = productDetail.name;

// Create a new heading element for the product name
const productName = document.createElement('h2');
productName.textContent =  productDetail.name;

// Create a new paragraph element for the product details
const productPrice = document.createElement('h3');
productPrice.textContent =  `Total Price :- ${productDetail.price}`;

// Add the img, heading, and paragraph elements to the div element
productDiv.appendChild(productImg);
productDiv.appendChild(productName);
productDiv.appendChild(productPrice);

// Add the div element to the DOM
  product.appendChild(productDiv);
}
productDisplay(productDetail)


let addList = document.getElementById("addList");
let addForm = document.getElementById("addForm");

// choose Address Default or Custom
function chooseAdd() {
  let chooseBtn = document.getElementById("cstmAdd");
  chooseBtn.addEventListener("click", () => {
    if (addList.style.display === "block") {
      addList.style.display = "none";
      addForm.style.display = "block"
      chooseBtn.innerText = "Choose Default";
      
      
    } else {
      addList.style.display = "block";
      addForm.style.display = "none";
      chooseBtn.innerText = "Custome Address";
     }
    })
}
chooseAdd();

let shippingAddress = null;

//Choose Address From Radio Button.
const radioButtons = document.getElementsByName("address");

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    if (this.checked) {    
      let add = this.value
      shippingAddress = add;
    }
  });
});


//getting address from custom form.
function Custom_form() {
  if (shippingAddress === null) {
    const form = document.querySelector('form');
 
    // event.preventDefault(); // prevent button from submitting
  
    const nameInput = document.querySelector('#name');
    const nameValue = nameInput.value;
  
    const addressInput = document.querySelector('#address');
    const addressValue = addressInput.value;
    
    const cityInput = document.querySelector('#city');
    const cityValue = cityInput.value;

    const stateInput = document.querySelector('#state');
    const stateValue = stateInput.value;

    const zipInput = document.querySelector('#zip');
    const zipValue = zipInput.value;
    let add = ` ${nameValue} ${addressValue}  ${cityValue}  ${stateValue}  ${zipValue}`
    shippingAddress = add
    
  }
}


//submit button functanility
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
  Custom_form();
  let Data = { address:shippingAddress, productDetail: productDetail };
    // Build the URL with the parameters
    let query = encodeURIComponent(JSON.stringify(Data));
    window.location.href = `cardDetail.html?data=${query}`;

  });



