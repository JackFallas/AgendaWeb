import { Button } from "../../common/button/Button.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage/Storage.js";
import { viewContacs } from "../../layout/nav/NavControlers.js";

function NewContactForm() {
    let form = document.createElement("form");
    form.className = "new-contact-form";

    // Contenedor para el cuestionario (la tarjeta)
    let card = document.createElement("div");
    card.className = "form-card"; 
    form.appendChild(card);

    // Titulo
    let title = document.createElement("h2");
    title.textContent = "Nuevo Contacto";
    card.appendChild(title);

    // Contenedor para la informacion
    let grid = document.createElement("div");
    grid.className = "form-grid"; 
    card.appendChild(grid);

    // Funcion para no repetir codigo (para crear un espacio de label e input)
    const crearCampo = (labelTexto, idInput, placeholder, tipo = "text") => {
        let divContainer = document.createElement("div");
        divContainer.className = "form-field";

        let label = document.createElement("label");
        label.textContent = labelTexto;

        let input = document.createElement("input");
        input.type = tipo;
        input.id = idInput;
        input.placeholder = placeholder;
        input.required = true;

        divContainer.appendChild(label);
        divContainer.appendChild(input);

        grid.appendChild(divContainer);
        return input;
    };

    // Campo Alias
    let inputAlias = crearCampo(
        "Alias",
        "alias",
        "Ej: Luis"
    );

    // Campo Telefono 1
    let inputNum1 = crearCampo (
        "Primer Numero",
        "num 1",
        "Ej: 12345678",
        "tel"
    );

    // Campo Telefono 2
    let inputNum2 = crearCampo (
        "Segundo Numero",
        "num 1",
        "Ej: 12345678",
        "tel"
    );

    // Campo Nombre
    let inputNombre = crearCampo(
        "Nombre Completo", 
        "nombre", 
        "Nombre y Apellido"
    );

    //Campo Ubicacion
    let inputUbicacion = crearCampo(
        "Ubicacion", 
        "ubicacion", 
        "Ciudad o Direccion"
    );

    //Campo Tipo Familiar
    let inputTipo = crearCampo(
        "Tipo Familiar", 
        "tipo", 
        "Ej: Amigo, Trabajo, Familia"
    );

    // Botones
    let btnSubmit = (Button(
        "",
        "submit",
        "save",
        function (){
            form.requestSubmit();
        }
    ));

    let btnCancel = (Button(
        "",
        "cancel",
        "cancel",
        function (){
            viewContacs();
        }
    ));

    // Creamos el div de los botones para mejor control
    let divBotones = document.createElement("div");
    divBotones.className = "form-botones-centrados";

    divBotones.appendChild(btnCancel);
    divBotones.appendChild(btnSubmit);

    card.appendChild(divBotones);

    // Porgramacion del formulario

    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        let contacto = {
            alias: inputAlias.value,
            primerNumero: inputNum1.value,
            segundoNumero: inputNum2.value,
            nombreCompleto: inputNombre.value,
            ubicacion: inputUbicacion.value,
            tipoFamiliar: inputTipo.value
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