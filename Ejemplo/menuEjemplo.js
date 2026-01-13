let menu = function () {
    //Ejercicio 2
    let div = document.createElement("div"); 
    div.className = "div-padre";

    let div1 = document.createElement("div");
    div.appendChild(div1);
    div1.className = "div-hijo1";

    let div2 = document.createElement("div");
    div.appendChild(div2);
    div2.className = "div-hijo2";

    return div;
}

export {menu};