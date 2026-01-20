import { ItemToDoList } from "../../common/itemToDoList/ItemToDoList";
import { ToDo_List } from "../contactos/db";
let ToDoList = () => {
    let sectionToDoList = document.createElement("section");
    sectionToDoList.className = "toDoList";

    let h2 = document.createElement("h2");
    h2.textContent = "To Do List";
    sectionToDoList.appendChild(h2);
    
    ToDo_List.forEach((toDoList) => {
        sectionToDoList.appendChild(ItemToDoList(
            "checkBox",
            toDoList.titulo,
            toDoList.prioridad,
            toDoList.fecha));
    });
    
    sectionToDoList.appendChild(ItemToDoList("checkBox", "Y yo le pregunte", "urgente","20/01/2026"))

    return sectionToDoList;
}

export {ToDoList};