import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Publishcard.module.css";
export function Publishcard({ publica }) {
    const imageurl = "https://image.tmdb.org/t/p/w300" + publica.poster_path;
    return (
       <li className={styles.publishcard}>
        <Link to={"/publicacion/" + publica.id}>
        <img
            width={230}
            height={345} 
            className={styles.publishimage}
            src = {imageurl} 
            alt = {publica.title}/>
        </Link>
            
            <div>{publica.title}</div>
        </li>
    );
}