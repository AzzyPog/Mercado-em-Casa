const button = document.getElementById("saveButton");
const productName = document.querySelector("#productName");
const productQntd = document.querySelector("#productQuantity");
const productUnit = document.querySelector("#productUnit");
const productPrice = document.querySelector("#productPrice");
const listContent = document.querySelector("#listContent");

button.addEventListener("click", function () {
    let name = productName.value;
    let quantity = productQntd.value;
    let unit = productUnit.value;
    let price = productPrice.value.includes(",") ? `R$ ${productPrice.value}` : `R$ ${productPrice.value},00`;

    if (name === "" || quantity === "" || unit === "null" || price === ""){
        alert("Todos os valores devem ser preenchidos");
        return;
    }
    let product = [quantity, unit, name, price];

    const div = document.createElement("div");
    div.className = "list-container";

    product.forEach((valor) => {
        let span = document.createElement("span");
        span.className = "list";
        span.textContent = valor;
        div.appendChild(span);
    })

    let img = document.createElement("img");
    img.src = "./assets/delete.png";
    img.alt = "trash can button colored red, used to delete the current item";
    div.appendChild(img);
    img.addEventListener("click", deleteItem);
   

    listContent.appendChild(div);
})

function deleteItem(event) {
    let deleteButton = event.target;
    let item = deleteButton.parentNode;
 
    item.remove();
}