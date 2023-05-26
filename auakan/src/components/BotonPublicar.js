//import React from "react";
import React, { useEffect, useState } from "react";
import styles from "../pages/PublishDetails.module.css";
import { useParams } from "react-router-dom";
import { fetchData } from "../Util/Client";
export function BotonPublicar({ tarjetaId, publicado, onPublicar, onRetirar }) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);
  console.log()
  useEffect(() => {
    fetchData()
      .then((result) => {
        const filteredData = result.filter((item) => item.id === id);
        const updatedData = filteredData.map((item) => ({
          ...item,
          publicado: localStorage.getItem(`publicado_${item.id}`) === "true",
        }));
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  //console.log(data);
  const datapub = data.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

  //console.log(datapub);
  const handlePublicar = () => {
    onPublicar(tarjetaId);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer c2hhMjU2Ojk1NjpjYTM2NzZlMTQ0YWM0MTE0Y2MzMWZlZGJjMzg0YmVlZDA2YTdjZjYwOTc0YzNhMWMzY2ZiNTI2MWVlODBlYTM3");

    var raw = JSON.stringify({
      "alias": datapub[tarjetaId].nombre,
      "articletext": datapub[tarjetaId].detalles_prod,
      "catid": 12,
      "language": "*",
      "metadesc": "",
      "metakey": "",
      "title": datapub[tarjetaId].nombre_prod,
      "state": 0
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://dev.auakan.com/api/index.php/v1/content/articles", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  const handleRetirar = () => {
    onRetirar(tarjetaId);
    // Agregar aquí el código para retirar el artículo en Joomla utilizando el endpoint de Joomla
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer c2hhMjU2Ojk1NjpjYTM2NzZlMTQ0YWM0MTE0Y2MzMWZlZGJjMzg0YmVlZDA2YTdjZjYwOTc0YzNhMWMzY2ZiNTI2MWVlODBlYTM3");

    var raw = JSON.stringify({
      "catid": 12,
      "title": "Updated article",
      "state": -2
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://dev.auakan.com/api/index.php/v1/content/articles/api/index.php/v1/content/articles/${datapub[tarjetaId].id}", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <div className={styles.botonescontainer}>
      {publicado ? (
        <h1 className={styles.leyendas}>Este Articulo se encuentra publicado en Auakán</h1>
      ) : (
        <h1 className={styles.leyendas}>Este Articulo no se encuentra publicado en Auakán</h1>
      )}

      {publicado ? (
        <button className={styles.botonescontainer} onClick={handleRetirar}>
          <strong>RETIRAR</strong>
        </button>
      ) : (
        <button className={styles.botonescontainer} onClick={handlePublicar}>
          <strong>PUBLICAR</strong>
        </button>
      )}
    </div>
  );
}

export default BotonPublicar;
