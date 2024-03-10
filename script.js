const listInput = document.getElementById("input-box");
const listConatainer = document.getElementById("list-container");
function addList() {
    if (listInput == "") {
        alert("Please Enter something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = listInput.value;
        listConatainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    listInput.value = '';
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);