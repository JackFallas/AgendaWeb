import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { ContactList } from "../db/db.js";


let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos"
    sectionContactos.appendChild(h2);

    ContactList.forEach((contact) => {
        sectionContactos.appendChild(ItemContacto("user",
            contact.nombre, contact.telefono));
    });

    sectionContactos.appendChild(ItemContacto("user", "Jossue Fuentes", "12345678"));    
    return sectionContactos;}

export {Contactos};

