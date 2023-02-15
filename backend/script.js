// create a function, that pull the input value from the input field, and then package the text in a textNode, to send the text that is wrapped with TextNode to an empty JS created ListItem, so then the ListItem with its TextNode child, can be sent as a whole package to the UL.
let todoListUl = document.querySelector(".myUl");

function AddTodo() {
    let inputField = document.getElementById("TodoInput").value;
    if (inputField === "") {
        alert("cant Add Empty Field!");
    } else {
        let TextNode = document.createTextNode(inputField);
        let listItem = document.createElement("li");
        listItem.appendChild(TextNode);
        todoListUl.appendChild(listItem);
        document.getElementById("TodoInput").value="";
    }
}