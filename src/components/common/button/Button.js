let Button = (title, id, img, callback) => {
    let div = document.createElement("div");
    div.id = id;

    let divImage = document.createElement("div");
    divImage.className = "button-image";

    let imgIcon = document.createElement("img");
    imgIcon.src = `./assets/icons/${img}.svg`;
    imgIcon.alt = title;
    divImage.appendChild(imgIcon);

    let p = document.createElement("button");
    p.className = "button-text";
    p.textContent = title;

    div.appendChild(divImage);
    div.appendChild(p);

    //funcion anonima () => {}; == a funtion callback () { callback ()};
    div.addEventListener("click", () => {
        callback(); 
        console.log("seccion completada");
    });

    return div;
}

export {Button};