let cart = [];

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function toggleMenu() {
  document.querySelector(".menu").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      addToCart(name);
    });
  });
});

function addToCart(name) {
  const prices = { "Sunflowers": 120, "Lilies": 150, "Daisies": 100 };
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price: prices[name], qty: 1 });
  }
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach((item, index) => {
    sum += item.price * item.qty;
    cartItems.innerHTML += `
      <div>
        ${item.name} × ${item.qty} — R${item.price * item.qty}
        <button onclick="removeItem(${index})">✖</button>
      </div>
    `;
  });

  total.textContent = "R" + sum;
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}
