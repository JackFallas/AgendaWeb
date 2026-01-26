import { Button } from "../../common/button/Button.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage/Storage.js";
import { viewContacs } from "../../layout/nav/NavControlers.js";

function EditContactForm(contact, index) {
    // Seccion de contactos
    let container = document.createElement("section");
    container.className = "edit-contact-form";

    // Contenedor de tarjeta
    let form = document.createElement("form");
    form.className = "form-card";

    // Título
    let title = document.createElement("h2");
    title.textContent = "Editar Contacto";
    form.appendChild(title);

    // Contenedor de informacion
    let grid = document.createElement("div");
    grid.className = "form-grid";
    form.appendChild(grid);

    

    // Funcion para no repetir codigo (con asignacion de valor inicial)
    const crearCampo = (labelTexto, idInput, placeholder, valorInicial, tipo = "text") => {
        let div = document.createElement("div");
        div.className = "form-field";

        let label = document.createElement("label");
        label.textContent = labelTexto;

        let input = document.createElement("input");
        input.type = tipo;
        input.id = idInput;
        input.placeholder = placeholder;
        input.value = valorInicial; 
        input.required = true;

        div.appendChild(label);
        div.appendChild(input);
        grid.appendChild(div);

        return input;
    };

    // Campo Alias
    let inputAlias = crearCampo(
        "Alias",
        "alias",
        "Ej: Luis",
        contact.alias
    );

    // Campo Telefono 1
    let inputNum1 = crearCampo (
        "Primer Numero",
        "num 1",
        "Ej: 12345678",
        contact.primerNumero,
        "tel"
    );

    // Campo Telefono 2
    let inputNum2 = crearCampo (
        "Segundo Numero",
        "num 2",
        "Ej: 12345678",
        contact.segundoNumero,
        "tel"
    );

    // Campo Nombre
    let inputNombre = crearCampo(
        "Nombre Completo", 
        "nombre", 
        "Nombre y Apellido",
        contact.nombreCompleto
    );

    // Campo Ubicacion
    let inputUbicacion = crearCampo(
        "Ubicacion", 
        "ubicacion", 
        "Ciudad o Direccion",
        contact.ubicacion
    );

    // Campo Tipo Familiar
    let inputTipo = crearCampo(
        "Tipo Familiar", 
        "tipo", 
        "Ej: Amigo, Trabajo, Familia",
        contact.tipoFamiliar
    );

    // Botones

    // Contenedor de botones centrados
    let divBotones = document.createElement("div");
    divBotones.className = "form-botones-centrados";


    let btnSubmit = Button(
        "",
        "submit",
        "save",
        function () {
            form.requestSubmit();
        }
    );

    let btnCancel = Button(
        "",
        "cancel",
        "cancel",
        function () {
            viewContacs();
        }
    );

    divBotones.appendChild(btnCancel);
    divBotones.appendChild(btnSubmit);
    form.appendChild(divBotones);

    // Programacion de la actualizacion
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtenemos la lista completa del storage
        const lista = getContactsFromStorage();

        // Actualizamos el objeto en la posicion especifica usando el index
        lista[index] = {
            alias: inputAlias.value,
            primerNumero: inputNum1.value,
            segundoNumero: inputNum2.value,
            nombreCompleto: inputNombre.value,
            ubicacion: inputUbicacion.value,
            tipoFamiliar: inputTipo.value
        };

        // Guardamos el array con LocalStorae
        saveContactsToStorage(lista);

        // Regresamos a la lista de contactos
        viewContacs();
    });

    container.appendChild(form);
    return container;
}

export { EditContactForm };