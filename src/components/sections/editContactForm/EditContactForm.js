import { Button } from "../../common/button/Button.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage/storage.js";
import { viewContacs } from "../../layout/nav/NavControlers.js";

function EditContactForm(contact, index) {
    let form = document.createElement("form");
    form.className = "edit-contact-form";

    //Titutlo
    let title = document.createElement("h2");
    title.textContent = "Editar Contacto";
    form.appendChild(title);

    // Campo nombre
    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre";
    labelNombre.htmlFor = "nombre";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    inputNombre.name = "nombre";
    inputNombre.value = contact.nombre;
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
    inputTelefono.value = contact.telefono;
    inputTelefono.required = true;
    inputTelefono.placeholder = "ej: 12345678";

    // Botones
    let btnSubmit = (Button(
        "Guardar Cambios",
        "submit",
        "",
        function (){
            console.log("Edicion realizada");
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

        // Obtenemos la lista completa
        const lista = getContactsFromStorage();

        // Actualizamos solo el elemento en la posicion index
        lista[index] = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value   
        };

        // Guardamos todo el array de vuelta
        saveContactsToStorage(lista);

        // Limpiar formulario
        form.reset();

        // Regresamos a vista de contactos
        viewContacs();
        
    });
    
    return form;
}

export {EditContactForm};