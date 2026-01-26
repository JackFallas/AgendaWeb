const CONTACT_KEY = "lista_contactos";
const TASKS_KEY = "lista_tareas"

// Seccion de contactos

function saveContactsToStorage(contactos){
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage(){
    return JSON.parse(localStorage.getItem(CONTACT_KEY) || "[]");
}

// Seccion de tareas

function saveTasksToStorage(tasks){
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function getTasksFromStorage(){
    return JSON.parse(localStorage.getItem(TASKS_KEY) || "[]");
}

export {saveContactsToStorage, getContactsFromStorage, saveTasksToStorage, getTasksFromStorage};