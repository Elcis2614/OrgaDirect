// JavaScript source code
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

function scroll_right() {
    var right = document.querySelector(".similar-products");
    right.scrollBy(350, 0);
}
function scroll_left() {
    var left = document.querySelector(".similar-products");
    left.scrollBy(-350, 0);
}
