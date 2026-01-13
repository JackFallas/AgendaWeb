import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/contactos.js";

// App
let app = document.getElementById("app");
 
// Section menu
let nav = document.getElementById("nav");
// Agregar los botones
nav.appendChild(Button("Usuario", "usuario" , "user_box"));
nav.appendChild(Button("Agenda", "agenda", "phone_box"));
nav.appendChild(Button("ToDoList", "toDoList", "list"));

// Section container
let container = document.getElementById("container");
container.appendChild(Contactos());