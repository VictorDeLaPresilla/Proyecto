import styles from "./Publishcard.module.css";
export function Publishcard({ publica }) {
    const imageurl = "https://image.tmdb.org/t/p/w300" + publica.poster_path;
    return (
       <li className={styles.publishcard}>
            <img className={styles.publishimage} src = {imageurl} alt = {publica.title}/>

            <div>{publica.title}</div>
        </li>
    );
}