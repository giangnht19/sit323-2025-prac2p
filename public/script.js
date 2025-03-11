document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/accounts")
        .then(response => response.json())
        .then(accounts => {
            let container = document.getElementById("accounts");
            accounts.forEach(acc => {
                let div = document.createElement("div");
                div.className = "account";
                div.innerHTML = `
                    <img src="${acc.img}" alt="${acc.name}" class="account-img">
                    <h2>${acc.name}</h2>
                    <p>Price: ${acc.price}đ</p>
                    <button onclick="addToCart('${acc.name}', ${acc.price})">Buy</button>
                `;
                container.appendChild(div);
            });
        });
});

let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}đ`;
        cartList.appendChild(li);
    });
}
