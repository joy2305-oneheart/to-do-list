function addUlAndLi() {
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.textContent = "New Item";
    ul.appendChild(li);
    document.body.appendChild(ul);
}
var addButton = document.getElementById("addButton");
addButton.addEventListener("click", addUlAndLi);