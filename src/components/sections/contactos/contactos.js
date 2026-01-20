import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { getContactsFromStorage } from "../../common/storage/storage.js";
import { EditContactForm } from "../editContactForm/EditContactForm.js";


let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    // Refrescar la lista sin recargar la pagina 
    const render = () => {
        // Limpiamos la seccion para evitar duplicados
        sectionContactos.innerHTML = "";

        // Creamos la seccion
        let h2 = document.createElement("h2");
        h2.textContent = "Mis Contactos"
        sectionContactos.appendChild(h2);

        const contactosActuales = getContactsFromStorage();

        contactosActuales.forEach((contact, index) => {
            sectionContactos.appendChild(ItemContacto(
                "user",
                contact.nombre, 
                contact.telefono));
            
            // Contenedor de la acciones para botones
            let actionsContainer = document.createElement("div");
            actionsContainer.className = "item-actions";

            // Boton de editar
            let btnEdit = (Button(
                "Editar",
                "edit",
                "edit",
                function (){
                    EditContactForm(contact, index);
                }
            ));

            actionsContainer.appendChild(btnEdit);

        });

        return sectionContactos;
    };
};
    /* 
    Agregar un usuario desde aqui en codigo
    sectionContactos.appendChild(ItemContacto("user", "Jossue Fuentes", "12345678"));    

    */

export {Contactos};

