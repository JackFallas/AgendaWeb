import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { NewContactForm } from "./components/sections/newContactForm/NewContactForm.js";
import { ToDoList } from "./components/sections/toDoList/ToDoList.js";

// Mostrar menu principal

function App(){

    // root = app
    let root = document.getElementById("root");

    // Limpiamos el formulario del login
    root.innerHTML = "";

    // Quitamos el diseño de login.css
    root.classList.remove("vista-login")
    // Agregamos el diseño de app.css
    root.classList.add("vista-app");

    /*
    Dato: 
    el get funciona con root pq root esta definido dentro de el html
    si queremos que cree los elementos de nuevo (sin usar los del login u otro js)
    debemos createElement para que al limpiar el root y dejarlo vacio pueda encontrar
    y crear lo que necesito
    */

    // Section menu
    let nav = document.createElement("nav");
    nav.id = "nav";

    // Section container
    let container = document.createElement("container");
    container.id = "container";

    // Pegamos el nav y container al root
    root.appendChild(nav);
    root.appendChild(container);


    // Agregar los botones globales
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
            container.appendChild(ToDoList())
        }
    ));

    return root;
}

export {App};
// container.appendChild(NewContactForm());

