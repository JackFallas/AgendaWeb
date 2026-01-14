import { NewContactForm } from "../../sections/newContactForm/NewContactForm";
import { contactos } from "../../sections/contactos/contactos.js";

let container = document.getElementById("container");

let viewContacs = function (){
    container.innerHtml = "";
    container.appendChild((contactos));
}

let viewNewContacs = function (){
    container.innerHtml = "";
    container.appendChild(NewContactForm());
}

export {viewContacs, viewNewContacs}