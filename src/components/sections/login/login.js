import { Button } from "../../common/button/Button.js";
let Login = function (validado) {
    
    let login = document.createElement("section");
    
    // Creacion de input de usuario
    let h3 = document.createElement("h3");
    h3.innerHTML = "Login";

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    // Creacion de input de password
    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";

    // Agregar boton global (titulo, id, img, callback)
    let button = (Button(
        "Iniciar Sesion",
        "login",
        "",
        function (){
            if (user.value === "admin"){
                console.log("Usuario correcto")
                console.log("Realizando callback")
                validado();
            } else{
                console.log("Usuario incorrecto");
            }

        }
    ))

    login.appendChild(h3);
    login.appendChild(user);
    login.appendChild(password);
    login.appendChild(button);

    return login;
}

export {Login};