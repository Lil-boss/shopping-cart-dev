function getProduct(idName, price, isAdd) {
  const getInput = document.getElementById(idName + "-number");
  let productNumber = parseInt(getInput.value);
  if (isAdd == true) {
    productNumber = productNumber + 1;
    getInput.value = productNumber;
  } else {
    if (productNumber > 0) {
      productNumber = productNumber - 1;
      getInput.value = productNumber;
    }
  }
  //get the product price
  const productPrice = document.getElementById(idName + "-total");
  productPrice.innerText = productNumber * price;
  totalPrice();
}

function getProductPrice(idName) {
  const productInput = document.getElementById(idName + "-number");
  const productValue = parseInt(productInput.value);
  return productValue;
}

function totalPrice() {
  const phoneTotal = getProductPrice("phone") * 1259;
  const caseTotal = getProductPrice("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const total = subTotal + tax;

  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = total;
}

document.getElementById("phone-plus").addEventListener("click", function () {
  getProduct("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  getProduct("phone", 1219, false);
});
document.getElementById("case-plus").addEventListener("click", function () {
  getProduct("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  getProduct("case", 59, false);
});
