// Llamar a login
import { Login } from "./components/sections/login/Login.js";
import {App} from "./App.js";

// Esto determina el espacio principal
let root = document.getElementById("root");

// Colocamos el css de login
    root.classList.add("vista-login");

// aqui llama al login al root (el contendor principal)
root.appendChild(Login(App));