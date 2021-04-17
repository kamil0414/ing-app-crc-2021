function buttonHandler(){
    const inputValue = document.getElementById("text").value
    document.getElementById("header").innerHTML = inputValue
    document.title = inputValue
}
 
function createListItem(){
    const inputValue = document.getElementById("items").value
    const ul = document.getElementById("optional");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue))
    ul.appendChild(li)
}