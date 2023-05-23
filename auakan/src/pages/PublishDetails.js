import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./PublishDetails.module.css";
import { get } from "../Util/Client";

export function PublishDetails() {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    get("/producto/" + productoId).then((data) => {
      setProducto(data);
    });
  }, [productoId]);

  if (!producto) {
    return null;
  }

  const imageurl =
    "https://auakanapi.000webhostapp.com/api.php?request=getAnuncios" +
    producto.fotografia_prod;

  return (
    <div className={styles.DetailsContainer}>
      <img
        className={`${styles.col}  ${styles.publicimage}`}
        src={imageurl}
        alt={producto.nombre_prod}
      />
      <div className={`${styles.col} ${styles.pubdet}`}>
        <p className={styles.firstItem}>
          <strong>Producto: </strong>
          {producto.nombre_prod}
        </p>
        <p>
          <strong>Detalles: </strong>
          {producto.detalles_prod}
        </p>
        <p>
          <strong>Tipo de Producto: </strong>
          {console.log(producto)}
          {producto.nombre}
        </p>
      </div>
    </div>
  );
}


/*import { useEffect, useState } from "react";
import { useParams } from "react-router";
import movie from "./Detalles.json";
import styles from "./PublishDetails.module.css";
import { get } from "../Util/Client";
export function  PublishDetails(){
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then((data) =>{
            setMovie(data);
        });
    }, [movieId]);

    if(!movie){
        return null;
    }

    const imageurl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.DetailsContainer}>
            <img 
                className={`${styles.col}  ${styles.publicimage}`} 
                src={imageurl} 
                alt={movie.tittle}
            />
            <div className={`${styles.col} ${styles.pubdet}`}>
                <p className={styles.firstItem}>
                    <strong>Producto: </strong>
                     {movie.title}
                </p>
                <p>
                    <strong>detalles: </strong> 
                    {movie.overview}
                </p>
                <p>
                    <strong>Tipo de Producto: </strong>
                    {movie.genres.map((genres) => genres.name).join(", ")}
                    {publics.nombre}
                </p>
            </div>
        </div>
    );
}*/