
let saves = {}; // Variable global para almacenar los estados del checkbox

fetch('https://auakanapi.000webhostapp.com/api.php?request=getAnuncios')
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('tbody');
        data.forEach(producto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td>${producto.id}</td>
              <td>${producto.nombre_prod}</td>
              <td>${producto.detalles_prod}</td>
              <td>${producto.precio_prod}</td>
              <td>${producto.entrega_prod}</td>
              <td><img src="${producto.fotografia_prod}" alt="Fotografía del producto"></td>
              <td>
                <input type="checkbox" ${saves[producto.id] ? 'checked' : ''} onclick="saveState(this, ${producto.id}, '${producto.nombre_prod}', '${producto.detalles_prod}', '${producto.precio_prod}', '${producto.entrega_prod}', '${producto.fotografia_prod}')">
              </td>
            `;
            tbody.appendChild(tr); //agrega los datos a la tabla
        });
    })
    .catch(error => console.error(error));
function saveState(checkbox, id, nombre, detalles, precio, entrega, fotografia) {
    saves[id] = checkbox.checked ? 1 : 0; // Actualizar el estado del checkbox en la variable global

    /*const producto = {
        id,
        nombre_prod: nombre,
        detalles_prod: detalles,
        precio_prod: precio,
        entrega_prod: entrega,
        fotografia_prod: fotografia,
        visible: saves[id]
    }; // Crear un objeto con todos los detalles del producto*/
    //if(producto.visible === "1"){
    /* const offer = {
         id,
         name: nombre,
         details: detalles,
         price: precio,
         enter: entrega,
         picture: fotografia,
         state: saves[id]
     };
     var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/json");
     myHeaders.append("Authorization", "Bearer c2hhMjU2Ojg0MDpjY2RjNWE0NzVmNjhkNGUxMjc5MjM4NTc4YzA3YjU4MDAwZjdlNjUwMTcyODdkYjc3Y2NjMTQ0ZWJjYzBiZWY1");

     var raw = JSON.stringify({
         "alias": offer.price.toLowerCase().replace(/\s+/g, '-'),
         "articletext": offer.details,
         "catid": offer.id,
         "language": "*",
         "metadesc": "",
         "metakey": "",
         "title": offer.name,
         "state": 1
     });

     var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
         redirect: 'follow',
     };

     //const corsProxy = "http://cors-anywhere.herokuapp.com/";
     const joomlaUrl = "localhost/Auakan/api/index.php/v1/content/articles";*/

    fetch(joomlaUrl, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    console.log(offer); // Imprimir el objeto en la consola

}



