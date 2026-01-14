import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/contactos.js";
import { NewContactForm } from "./components/sections/newContactForm/NewContactForm.js";

// App
let app = document.getElementById("app");
 
// Section menu
let nav = document.getElementById("nav");

// Agregar los botones
nav.appendChild(Button(
    "Usuario", 
    "usuario" , 
    "user_box",
    function () {
        container.innerHTML = "";
    }
));

nav.appendChild(Button(
    "Agenda", 
    "agenda", 
    "phone_box",
    function () {
        container.innerHTML = "";
        container.appendChild(Contactos());
    }
));

nav.appendChild(Button(
    "agregar", 
    "Agreagar", 
    "add",
    function () {
        container.innerHTML = "";
        container.appendChild(NewContactForm());
    }
));

nav.appendChild(Button(
    "ToDoList", 
    "toDoList", 
    "list",
    function () {
        container.innerHTML = "";
    }
));

// Section container
let container = document.getElementById("container");

// container.appendChild(NewContactForm());

