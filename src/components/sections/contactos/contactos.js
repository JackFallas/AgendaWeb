import { ItemContacto } from "../../common/itemContacto/itemContacto.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos"
    sectionContactos.appendChild(h2);

    sectionContactos.appendChild(ItemContacto("user", "Jossue Fuentes", "12345678"));    
    return sectionContactos;
}

export {Contactos};

