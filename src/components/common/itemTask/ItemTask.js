import {Button} from "../button/Button.js";
import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage/Storage.js";
import { viewToDoList } from "../../layout/nav/NavControlers.js";
import { EditTaskForm } from "../../sections/editTaskForm/EditTaskForm.js";

let ItemTask = (imgCheck, titulo, prioridad, fecha, index) => {
    let div = document.createElement("div");
    div.className = "item-task";

    // Lado izquierdo: el check y la info
    let imgContainer = document.createElement("div");
    imgContainer.className = "task-img-container";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./src/assets/icons/${imgCheck}.svg`;
    etiquetaImg.className = "task-check";
    imgContainer.appendChild(etiquetaImg);
    
    // Textos
    let infoDiv = document.createElement("div");
    infoDiv.className = "info-tarea";

    let etiquetaTitulo = document.createElement("p");
    etiquetaTitulo.textContent = titulo;
    etiquetaTitulo.className = "titulo-tarea";

    let etiquetaPrioridad = document.createElement("span");
    etiquetaPrioridad.textContent = prioridad;
    // Convierte el texto a minusculas y reemplaza espacios por guiones para usar como clase
    let clasePrioridad = prioridad.toLowerCase().includes("urgente") ? "urgente" : "con-tiempo";
    etiquetaPrioridad.className = `prioridad-tag ${clasePrioridad}`;

    let etiquetaFecha = document.createElement("span");
    etiquetaFecha.textContent = fecha;
    etiquetaFecha.className = "fecha-tarea";

    infoDiv.appendChild(etiquetaTitulo);
    infoDiv.appendChild(etiquetaPrioridad);
    infoDiv.appendChild(etiquetaFecha);

    // Lado derecho: Acciones (editar y eliminar)
    let accions = document.createElement("div");
    accions.className = "task-accions";

    let btnEdit = Button(
        "", 
        "btn-edit", 
        "edit", 
        () => {
            const container = document.getElementById("container");
            container.innerHTML = "";
            container.appendChild(EditTaskForm({titulo, prioridad, fecha}, index));
    })

    let btnDelete = Button(
        "", 
        "btn-delete", 
        "delete", 
        () => {
            if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
                const lista = getTasksFromStorage();
                lista.splice(index, 1);
                saveTasksToStorage(lista);
                viewToDoList();
            }
    });

    accions.appendChild(btnEdit);
    accions.appendChild(btnDelete);

    div.appendChild(imgContainer);
    div.appendChild(infoDiv);
    div.appendChild(accions);

    return div;
}

export {ItemTask};