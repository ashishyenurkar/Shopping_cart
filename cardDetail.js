
// Get the query string parameter 'data'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dataParam = urlParams.get('data');

// Decode and parse the 'data' parameter
const decodedData = decodeURIComponent(dataParam);
const data = JSON.parse(decodedData);




//Display Product
const product = document.getElementById("Product-Detail");

function productDisplay(data) {

// Create a new img element and set its properties
const productImg = document.createElement('img');
productImg.src = data.productDetail.image;
productImg.alt = data.productDetail.name;

// Create a new heading element for the product name
const productName = document.createElement('h2');
productName.textContent =  data.productDetail.name;

// Create a new paragraph element for the product details
const productPrice = document.createElement('h3');
  productPrice.textContent = `Total Price is :- ${data.productDetail.price}`;
  const shippingAddress = document.createElement('h4');
  shippingAddress.textContent = `Delivery Address :- ${data.address}`


  // Add the all element to the DOM
product.appendChild(productImg);
product.appendChild(productName);
  product.appendChild(productPrice);
product.appendChild(shippingAddress);



}
productDisplay(data)





//Credit card Data Script.
let cardNumberInput = document.getElementById('card-number');
let cardholderNameInput = document.getElementById('cardholder-name');
let expiryDateInput = document.getElementById('expiry-date');
let cvvInput = document.getElementById('cvv');
let submitBtn = document.getElementById('submit-btn');

// Validate the credit card details when the form is submitted
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  let cardNumber = cardNumberInput.value;
  let cardholderName = cardholderNameInput.value;
  let expiryDate = expiryDateInput.value;
  let cvv = cvvInput.value;

  // Perform some basic validation
  if (cardNumber.length !== 16) {
    alert('Please enter a 16-digit credit card number');
  } else if (cardholderName.length < 3) {
    alert('Please enter a valid cardholder name');
  } else if (expiryDate.length !== 5 || expiryDate.charAt(2) !== '/') {
    alert('Please enter a valid expiry date in the format MM/YY');
  } else if (cvv.length !== 3) {
    alert('Please enter a valid 3-digit CVV number');
  } else {
    alert(`Thank you!
    
        Your order is Succesfully Placed
        Product Name :- ${ data.productDetail.name}
        Total Price :- ${ data.productDetail.price}
        At Address :- ${data.address}`)
  }
})

