import { Button } from "../../common/button/Button.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage/storage.js";
import { viewContacs } from "../../layout/nav/NavControlers.js";
function NewContactForm() {
    let form = document.createElement("form");
    form.className = "new-contact-form";

    //Titutlo
    let title = document.createElement("h2");
    title.textContent = "Nuevo Contacto";
    form.appendChild(title);

    // Campo nombre
    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre";
    labelNombre.htmlFor = "nombre";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    inputNombre.name = "nombre";
    inputNombre.required = true;
    inputNombre.placeholder = "Ingresa el nombre";

    // Campo telefono
    let labelTelefono = document.createElement("label");
    labelTelefono.textContent = "Telefono";
    labelTelefono.htmlFor = "telefono"

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.id = "telefono";
    inputTelefono.name = "telefono";
    inputTelefono.required = true;
    inputTelefono.placeholder = "ej: 12345678";

    // Botones
    let btnSubmit = (Button(
        "Guardar",
        "submit",
        "",
        function (){
            form.requestSubmit();
        }
    ));

    let btnCancel = (Button(
        "Cancelar",
        "cancel",
        "",
        function (){
            viewContacs();
        }
    ));


    form.appendChild(labelNombre);
    form.appendChild(inputNombre);
    form.appendChild(labelTelefono);
    form.appendChild(inputTelefono);
    form.appendChild(btnSubmit);
    form.appendChild(btnCancel);

    // Porgramacion del formulario

    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        let contacto = {
        nombre: inputNombre.value,
        telefono: inputTelefono.value
        };

        const contactoActual = getContactsFromStorage();
        contactoActual.push(contacto)
        saveContactsToStorage(contactoActual);

        //Limpiar formulario
        form.reset();

        viewContacs();
        
        /*
        Otra forma de limpiar
        inputNombre.value = "";
        inputTelefono.value = "";
        */
        
    });
    
    return form;
}

export {NewContactForm};