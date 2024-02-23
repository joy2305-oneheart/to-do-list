const inputBox = document.getElementById("input-text");
let btn = document.getElementById("addTask");
const listRow = document.querySelector(".to-do-list__row");

let newUl = "";

function createList() {
    if(newUl === "") {
        newUl =  document.createElement("ul");
        newUl.classList.add('list-group', 'mt-5');
        listRow.appendChild(newUl);
    }
    let li = document.createElement("li"); 
    li.textContent = inputBox.value;
    newUl.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.classList.add('list-group-item');
    li.appendChild(span);
    inputBox.value= '';
}

let addTask = () => (inputBox.value === "") ? alert("Make a List") : createList();
btn.addEventListener("click", addTask);

ul.addEventListener("click", function(e){
    if(e.target.tagName ==="li"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
