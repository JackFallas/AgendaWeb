import { ItemTask } from "../../common/itemTask/ItemTask.js";
import { Button } from "../../common/button/Button.js";
import { viewNewToDoList } from "../../layout/nav/NavControlers.js";
import { getTasksFromStorage } from "../../common/storage/storage.js";

let ToDoList = () => {
    let sectionToDoList = document.createElement("section");
    sectionToDoList.className = "toDoList";

    // Contenedor del encabezado
    let headerContainer = document.createElement("container");
    headerContainer.className = "toDoList-header";

    let h2 = document.createElement("h2");
    h2.textContent = "To Do List";

    let btnAdd = (Button(
        "",
        "add",
        "add",
        function(){
            viewNewToDoList();
        }
    ));

    // Estructura de encabezado
    headerContainer.appendChild(h2);
    headerContainer.appendChild(btnAdd);
    sectionToDoList.appendChild(headerContainer);

    const tareasActuales = getTasksFromStorage();

    tareasActuales.forEach((task) => {
        sectionToDoList.appendChild(ItemTask(
            "check_box",
            task.titulo,
            task.prioridad,
            task.fecha));
    });
    
    sectionToDoList.appendChild(ItemTask("check_box", "Y yo le pregunte", "urgente","20/01/2026"))

    return sectionToDoList;
}

export {ToDoList};