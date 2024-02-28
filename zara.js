
let itemname=['áo khoác blazer dáng suông','áo khoác tweed cổ tròn']

// nut search
// function searchItem() {
//     document.addEventListener("DOMContentLoaded", function () {
//         const searchInput = document.getElementById("searchInput");
//         // const productList = document.getElementById("productList");
//         const products = Array.from(document.querySelectorAll('.product-name'));
//         console.log(products)
//
//             searchInput.addEventListener("input", function() {
//                 const searchValue = searchInput.value.toLowerCase();
//                 products.forEach(product => {
//                     const productName = product.textContent.toLowerCase();
//                     if (productName.includes(searchValue)) {
//                         document.write("ok");
//                     } else {
//                         document.write(":(");
//                     }
//         //         });
//             });
//         });
//     })
// }
// nut mua ngay -> add to cart
let total = 0
let cart = "<td id=\"giohang\">GIỎ (" + total+")</td>\n"
document.getElementById("cart").innerHTML = cart
function addtocart() {
    total++
    console.log(total)
    data = "<td id=\"giohang\">GIỎ (" + total+")</td>\n"
    document.getElementById("cart").innerHTML = data
}

// an vao gio ra
// function cart(){
//     // document.getElementById("main").innerHTML = "hello"
// }