window.addEventListener("load", ()=>{
    let $title = document.querySelector("h1");
    let $botonRefrescar = document.querySelector("")
    $title.innerText = location.href;

    let frutas = [
        {
            id: 1,
            nombre: "Manzana",
            precio: 100
        },
        {
            id: 2,
            nombre: "Naranja",
            precio: 150
        },
        {
            id: 3,
            nombre: "Mandarina",
            precio: 200
        }
    ]

    let query = new URLSearchParams(location.search)
    let busqueda = query.get("buscar");

    if(busqueda){
        let frutaBuscada = frutas.find((fruta) => fruta.nombre == busqueda);
        $textoFrutas.innerText = `La fruta encontrada es: ${frutaBuscada.nombre} y su precio ${frutaBuscada.precio}` 
    }

})