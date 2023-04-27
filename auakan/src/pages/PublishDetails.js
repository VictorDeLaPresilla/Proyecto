import Detalles from "./Detalles.json"
import styles from "./PublishDetails.module.css"
export function  PublishDetails(){
    const imageurl = "https://image.tmdb.org/t/p/w500" + Detalles.poster_path;
    return (
        <div className={styles.DetailsContainer}>
            <img 
                className={styles.col + "" + styles.publicimage} 
                src={imageurl} 
                alt={Detalles.tittle}
            />
            <div className={styles.col}>
                <p>
                    <strong>Producto: </strong>
                     {Detalles.title}
                </p>
                <p>
                    <strong>detalles: </strong> 
                    {Detalles.overview}
                </p>
                <p>
                    <strong>Tipo de Producto: </strong>
                    {Detalles.genres.map((genres) => genres.name).join(", ")}
                </p>
            </div>
        </div>
    );
}