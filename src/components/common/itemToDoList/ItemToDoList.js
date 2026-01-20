let ItemToDoList = (imgCheck, titulo, prioridad, fecha) => {
    let div = document.createElement("div");
    div.classname = "item-ToDoList";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./src/assets/icons/${imgCheck}.svg`;

    let etiquetaTitulo = document.createElement("p");
    etiquetaTitulo.textContent = titulo;

    let etiquetaPrioridad = document.createElement("p");
    etiquetaPrioridad.textContent = prioridad;

    let etiquetaFecha = document.createElement("p");
    etiquetaFecha.textContent = fecha;
    
    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaTitulo);
    div.appendChild(etiquetaPrioridad);
    div.appendChild(etiquetaFecha);

    return div;
}

export {ItemToDoList};