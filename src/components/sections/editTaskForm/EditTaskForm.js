import { Button } from "../../common/button/Button.js";
import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage/Storage.js";
import { viewToDoList } from "../../layout/nav/NavControlers.js";

function EditTaskForm(taskData, index) {
    let container = document.createElement("section");
    container.className = "form-container-centered";

    let form = document.createElement("form");
    form.className = "form-card";

    // Titulo
    let title = document.createElement("h2");
    title.textContent = "Editar Tarea";
    form.appendChild(title);

    let grid = document.createElement("div");
    grid.className = "form-grid-single";
    form.appendChild(grid);

    const crearCampo = (labelTexto, id, type = "text", isSelect = false) => {
        let div = document.createElement("div");
        div.className = "form-field";
        let label = document.createElement("label");
        label.textContent = labelTexto;
        
        let input = isSelect ? document.createElement("select") : document.createElement("input");
        input.id = id;
        
        if (!isSelect) {
            input.type = type;
        }
        
        input.required = true;
        
        div.appendChild(label);
        div.appendChild(input);
        grid.appendChild(div);
        return input;
    };

    // Campos con datos precargados
    let inputTitulo = crearCampo("Título de la Tarea", "titulo");
    inputTitulo.value = taskData.titulo; // Precarga

    let inputPrioridad = crearCampo("Prioridad", "prioridad", "", true);
    
    // Opciones de prioridad
    let opt1 = document.createElement("option");
    opt1.value = "urgente";
    opt1.textContent = "Urgente";
    inputPrioridad.appendChild(opt1);

    let opt2 = document.createElement("option");
    opt2.value = "con-tiempo";
    opt2.textContent = "Con tiempo";
    inputPrioridad.appendChild(opt2);
    
    inputPrioridad.value = taskData.prioridad; // Precarga

    let inputFecha = crearCampo("Fecha Limite", "fecha", "date");
    inputFecha.value = taskData.fecha; // Precarga

    // Botones
    let divBotones = document.createElement("div");
    divBotones.className = "form-botones-centrados";

    let btnSubmit = Button("", "submit", "save", function () {
        form.requestSubmit();
    });

    let btnCancel = Button("", "cancel", "cancel", function () {
        viewToDoList();
    });

    divBotones.appendChild(btnSubmit);
    divBotones.appendChild(btnCancel);
    form.appendChild(divBotones);

    // Programación de la edición
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const listaActual = getTasksFromStorage();
        
        // Actualizamos el objeto en la posición del index
        listaActual[index] = {
            titulo: inputTitulo.value,
            prioridad: inputPrioridad.value,
            fecha: inputFecha.value
        };

        saveTasksToStorage(listaActual);
        viewToDoList();
    });

    container.appendChild(form);
    return container;
}

export { EditTaskForm };