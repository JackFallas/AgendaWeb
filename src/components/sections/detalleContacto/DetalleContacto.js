import { Button } from "../../common/button/Button.js";
import { viewContacs } from "../../layout/nav/NavControlers.js";
import { EditContactForm } from "../editContactForm/EditContactForm.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage/Storage.js";

let DetalleContacto = (contacto, index) => {
    let section = document.createElement("section");
    section.className = "detalle-contacto-container"; 

    let card = document.createElement("div");
    card.className = "detalle-card"; 

    let h2 = document.createElement("h2");
    h2.textContent = "Informacion del Contacto";
    card.appendChild(h2);

    // Contenedor para los datos
    let infoGrid = document.createElement("div");
    infoGrid.className = "info-grid";
    card.appendChild(infoGrid);

    const crearInfo = (label, valor) => {
        let div = document.createElement("div");
        div.className = "info-item";
        div.innerHTML = `
            <span class="label">${label}</span>
            <span class="value">${valor || "No asignado"}</span>
        `;
        infoGrid.appendChild(div);
    };

    crearInfo("Alias", contacto.alias);
    crearInfo("Primer Numero", contacto.primerNumero);
    crearInfo("Segundo Numero", contacto.segundoNumero);
    crearInfo("Nombre Completo", contacto.nombreCompleto);
    crearInfo("Ubicación", contacto.ubicacion);
    crearInfo("Tipo Familiar", contacto.tipoFamiliar);

    // Contenedor de botones
    let actions = document.createElement("div");
    actions.className = "form-botones-centrados";

    let btnEdit = Button(
        "", 
        "btn-edit", 
        "edit", 
        () => {
            const container = document.getElementById("container");
            container.innerHTML = "";
            container.appendChild(EditContactForm(contacto, index));
    });

    let btnDelete = Button(
        "", 
        "btn-delete", 
        "delete", 
        () => {
            if (confirm("¿Seguro que quieres eliminar este contacto?")) {
                const lista = getContactsFromStorage();
                lista.splice(index, 1);
                saveContactsToStorage(lista);
                viewContacs();
            }
    });

    let btnVolver = Button(
        "", 
        "btn-back", 
        "arrow_back", 
        () => viewContacs()
    );

    actions.appendChild(btnVolver);
    actions.appendChild(btnEdit);
    actions.appendChild(btnDelete);
    
    card.appendChild(actions);
    section.appendChild(card);

    return section;
};
export { DetalleContacto };