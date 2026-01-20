import { Button } from "../../common/button/Button.js";
import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage/storage.js";
import { viewToDoList } from "../../layout/nav/NavControlers.js";

function NewTaskForm(){
    let form = document.createElement("form");
    form.className = "new-task-form";

    // Titulo
    let title = document.createElement("h2");
    title.textContent = "Nueva Tarea";
    form.appendChild(title);

    // Campo de titulo
    let labelTitulo = document.createElement("label");
    labelTitulo.textContent = "Titulo";
    labelTitulo.htmlFor = "titulo";

    let inputTitutlo = document.createElement("input");
    inputTitutlo.type = "text";
    inputTitutlo.id = "titulo";
    inputTitutlo.name = "titulo";
    inputTitutlo.required = true;
    inputTitutlo.placeholder = "Ingrese el titulo de la tarea";

    // Campo de Prioridad
    let labelPrioridad = document.createElement("label");
    labelPrioridad.textContent = "Prioridad";
    labelPrioridad.htmlFor = "prioridad";

    let inputPrioridad = document.createElement("select");
    inputPrioridad.id = "prioridad";
    inputPrioridad.name = "prioridad";
    inputPrioridad.required = true;
    inputPrioridad.placeholder = "Seleccione la prioridad de la tarea";

    // Opciones de prioridad
    let opt1 = document.createElement("option");
    opt1.value = "urgente";
    opt1.textContent = "Urgente";
    inputPrioridad.appendChild(opt1);

    let opt2 = document.createElement("option");
    opt2.value = "Con tiempo";
    opt2.textContent = "Con tiempo";
    inputPrioridad.appendChild(opt2);

    // Campo de fecha
    let labelFecha = document.createElement("label");
    labelFecha.textContent = "Fecha";
    labelFecha.htmlFor = "fecha";

    let inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.id = "fecha";
    inputFecha.name = "fecha";
    inputFecha.required = true;
    inputFecha.placeholder = "Seleccione la fecha maxima de la tarea";

    // Botones
    let btnSubmit = (Button(
        "Guardar",
        "submit",
        "",
        function (){
            form.requestSubmit();
        }
    ));

    let btnCancel = (Button(
        "Cancelar",
        "cancel",
        "",
        function (){
            viewToDoList();
        }
    ));

    //Importaciones al form
    form.appendChild(labelTitulo);
    form.appendChild(inputTitutlo);
    form.appendChild(labelPrioridad);
    form.appendChild(inputPrioridad);
    form.appendChild(labelFecha);
    form.appendChild(inputFecha);
    form.appendChild(btnSubmit);
    form.appendChild(btnCancel);

    // Porgramacion del formulario

    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        let task = {
        titulo: inputTitutlo.value,
        prioridad: inputPrioridad.value,
        fecha: inputFecha.value
        };

        const tareaActual = getTasksFromStorage();
        tareaActual.push(task);
        saveTasksToStorage(tareaActual)

        //Limpiar formulario
        form.reset();

        viewToDoList();
    });

    return form;
    
}

export {NewTaskForm};