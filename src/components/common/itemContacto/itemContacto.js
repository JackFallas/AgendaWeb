let ItemContacto = (imgContacto, nombre, telefono) => {
    let div = document.createElement("div");
    div.className = "item-contacto";
    
    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./src/assets/icons/${imgContacto}.svg`;

    // Contenedor para los textos
    let infoDiv = document.createElement("div");
    infoDiv.className = "info-contacto";

    // Etiqueta pra el nombre
    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombre;
    etiquetaNombre.className = "nombre";

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;
    etiquetaTelefono.className = "telefono";

    infoDiv.appendChild(etiquetaNombre);
    infoDiv.appendChild(etiquetaTelefono);

    div.appendChild(etiquetaImg);
    div.appendChild(infoDiv);

    return div;
}

export {ItemContacto};