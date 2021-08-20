const primaryMemory = document.getElementById("primary-memory");
const doubleMemory = document.getElementById("double-memory");

const primaryDrive = document.getElementById("primary-ssd");
const halfTeraDrive = document.getElementById("halftera-ssd");
const teraDrive = document.getElementById("tera-ssd");

const free = document.getElementById("free");
const express = document.getElementById("express");

const bestPrice = document.getElementById("best-price");
const extraMemoryCost = document.getElementById("extra-memory-cost");
const extraStorageCost = document.getElementById("extra-storage-cost");
const deliveryCharge = document.getElementById("delivery-charge");
const totalPrice = document.getElementById("total-price");

const applyBtn = document.getElementById("apply");
const grandTotal = document.getElementById("grand-total");

const input = document.getElementById("input-field");

// setting different price to different gadgets
function gadgetPriceAndDelivery(costField, price) {
  const costArea = document.getElementById(costField);
  costArea.innerText = price;
  calcTotal();
}

// Implementing events to gadget buttons
primaryMemory.addEventListener("click", function () {
  gadgetPriceAndDelivery("extra-memory-cost", 0);
});

doubleMemory.addEventListener("click", function () {
  gadgetPriceAndDelivery("extra-memory-cost", 180);
});

primaryDrive.addEventListener("click", function () {
  gadgetPriceAndDelivery("extra-storage-cost", 0);
});

halfTeraDrive.addEventListener("click", function () {
  gadgetPriceAndDelivery("extra-storage-cost", 100);
});

teraDrive.addEventListener("click", function () {
  gadgetPriceAndDelivery("extra-storage-cost", 180);
});

free.addEventListener("click", function () {
  gadgetPriceAndDelivery("delivery-charge", 0);
});

express.addEventListener("click", function () {
  gadgetPriceAndDelivery("delivery-charge", 20);
});
// Implementing voucher by giving event handler to applyBtn and updating grand total price

applyBtn.addEventListener("click", function () {
  if (input.value == "stevekaku") {
    const totalAmount = totalPrice.innerText;
    grandTotal.innerText = calcTotal() - totalAmount * 0.2;
  } else {
    alert("wrong voucher given, plz give the correct one");
  }
  input.value = "";
});

// Calculating total price

function calcTotal() {
  const total =
    Number(bestPrice.innerText) +
    Number(extraMemoryCost.innerText) +
    Number(extraStorageCost.innerText) +
    Number(deliveryCharge.innerText);

  totalPrice.innerText = total;
  grandTotal.innerText = total;

  const totalAmount = totalPrice.innerText;
  return totalAmount;
}
