import { NewContactForm } from "../../sections/newContactForm/NewContactForm.js";
import { Contactos } from "../../sections/contactos/Contactos.js";
import { ToDoList } from "../../sections/toDoList/ToDoList.js";
import { NewTaskForm } from "../../sections/newTaskForm/NewTaskForm.js";


let viewContacs = function (){
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function (){
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(NewContactForm());
}

let viewToDoList = function (){
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(ToDoList());
}

let viewNewToDoList = function (){
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(NewTaskForm());
}

export {viewContacs, viewNewContacts, viewToDoList, viewNewToDoList}