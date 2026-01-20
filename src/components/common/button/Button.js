let Button = (title, id, img, callback) => {
    let div = document.createElement("div");
    div.id = id;
    div.className = "button-container";

    // Si hay imagen, crea el bloque de imagen
    if (img && img !== "") {
        let divImage = document.createElement("div");
        divImage.className = "button-image";

        let imgIcon = document.createElement("img");
        imgIcon.src = `./src/assets/icons/${img}.svg`;
        imgIcon.alt = title;

        divImage.appendChild(imgIcon);
        div.appendChild(divImage);
    }

    // El boton siempre lleva texto
    let p = document.createElement("button");
    p.className = "button-text";
    p.textContent = title;

    div.appendChild(p);

    //funcion anonima () => {}; == a funtion callback () { callback ()};
    div.addEventListener("click", () => {
        callback(); 
        console.log("seccion completada");
    });

    return div;
}

export {Button};