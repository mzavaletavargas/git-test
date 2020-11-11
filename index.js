const crudList = (listaInicial = []) => {
    let listaInterna = listaInicial;

    const obtenerLista = () => listaInterna;
    const agregarALista = (nuevo) => {
        listaInterna = [...listaInterna, nuevo]
    }

    return Object.freeze({
        obtenerLista,
        agregarALista
    })
}

const perroList = crudList();


const imagenPerro = () => {
    return document.getElementById("imagenPerro").value;
}

const agregarPerro = document.getElementById("agregarPerro").addEventListener("click", () => {
    const imagenDelPerro = imagenPerro()
    perroList.agregarALista(imagenDelPerro);
    render();
})

const render = () => {
    let htmlConImagenes = ''
    perroList.obtenerLista().forEach((perro) => {
        htmlConImagenes += `
     <img src="${perro}" />
    `
    })

    const contenedor = document.getElementById("contenedor");

    contenedor.innerHTML = htmlConImagenes;
}