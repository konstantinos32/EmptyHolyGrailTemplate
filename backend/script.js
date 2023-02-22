// create a function, that pull the input value from the input field, and then package the text in a textNode, to send the text that is wrapped with TextNode to an empty JS created ListItem, so then the ListItem with its TextNode child, can be sent as a whole package to the UL.
let todoListUl = document.querySelector(".myUl");
let todoListWrapper = document.getElementById("TodoListWrapper");

let ServiceId = "service_bhytemr";
let TemplateId = "template_ii54qll";
let publicApiId = "yZ9gB5CTCdFCk586e";
let formSubmitButton = document.querySelector(".sbmtButton");
let theForm = document.getElementById("contact_form");


//This algorithm is used in the TodoList

function AddTodo() {
    let inputField = document.getElementById("TodoInput").value;
    if (inputField === "") {
        alert("cant Add Empty Field!");
    } else {
        let TextNode = document.createTextNode(inputField);
        let listItem = document.createElement("li");
        listItem.appendChild(TextNode);
        listItem.classList.add("TodosStyle");
        todoListUl.appendChild(listItem);
        document.getElementById("TodoInput").value = "";
    }
}

//Algorithm for the Contact Form
theForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.sendForm(ServiceId, TemplateId, e.target)
        .then(function () {
            console.log("Message sent succesfully")
            alert("Message sent succesfully")
        }, function (error) {
            console.log("error");

        })
});

//Show and Hide TodoList
function ShowTodos() {
    if (todoListWrapper.style.display === "none") {
        todoListWrapper.style.display = "block"
    } else {
        todoListWrapper.style.display = "none";
    }
}