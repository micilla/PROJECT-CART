const plus = document.querySelectorAll(".fa-plus-circle");
const minus = document.querySelectorAll(".fa-minus-circle");
const del = document.querySelectorAll(".fa-trash-alt");
const like = document.querySelectorAll(".fa-heart");
const quantity = document.querySelectorAll(".quantity");
let result = document.querySelector(".total");
let price = [100, 20, 50];
let cartTotal = []

const cart = document.querySelectorAll(".cart");
function addQuantity(quantity) {
    const add = Array.from(plus);
    for (let i = 0; i < add.length; i++) {
        add[i].addEventListener("click", () => {
            quantity[i].textContent++;
            cartTotal.push(price[i]);
            const sum = cartTotal.reduce((a, b) => a + b, 0)
            result.textContent = `${sum} $`;
        });
    }
}

addQuantity([...quantity]);
function subQuantity(quantity) {
    const sub = Array.from(minus);
    for (let i = 0; i < sub.length; i++) {
        sub[i].addEventListener("click", () => {
            if (quantity[i].textContent > 0) {
                quantity[i].textContent--;
                cartTotal.splice(cartTotal.indexOf(price[i]), 1);
                const sum = cartTotal.reduce((a, b) => a + b, 0)
                result.textContent = `${sum} $`;
            }
        });
    }
}
subQuantity([...quantity]);
function delQuantity(del) {
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener("click", () => {
            cart[i].remove();
            del.length--;
            const deleted = cartTotal.filter((item) => item == price[i]);
            const deletedPrices = deleted.reduce((a, b) => a + b, 0);
            const total = cartTotal.reduce((a, b) => a + b, 0);
            result.textContent = `${total - deletedPrices} $`;
            if (del.length == 0) {
                location.reload();
            }
        });
    }
}
delQuantity([...del]);
function likeReaction(like) {
    for (let i = 0; i < like.length; i++) {
        like[i].addEventListener("click", () => {
            like[i].style.color = "red";
        });
        like[i].addEventListener("dblclick", () => {
            like[i].style.color = "black";
        });
    }
}
likeReaction([...like]);