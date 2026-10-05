let addBtn = document.querySelector("button");
let ul = document.querySelector("ul");
let inputText = document.querySelector("input");

addBtn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inputText.value;
    
    let delIcon = document.createElement("i");
    delIcon.className = "fa-solid fa-xmark"



    item.appendChild(delIcon);
    ul.appendChild(item);
    inputText.value = "";
});

ul.addEventListener("click", function(e) {
    if (e.target.matches("i.fa-solid.fa-xmark")) {
        e.target.closest("li").remove();
    }
});

