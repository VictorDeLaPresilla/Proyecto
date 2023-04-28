import { useEffect, useState } from "react";
import styles from "./Publish.module.css"
import { Publishcard } from "./Publishcard";
import publics from "./publi.json";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { get } from "../Util/Client";


export function Publish() {
    //let offer = [];
    //const offerState = useState([]);
    //const offer = offerState[0];
    //const setOffer = offerState[1];
    const [movie, setMovie] = useState([]);
    //const { offerId } = useParams();
    useEffect(() => {
        get("/discover/movie").then(data => {
            setMovie(data.results);
            //console.log(offer);
        });
    }, []);
    //console.log(publicaciones);
    return (
        <ul className={styles.publishgrid}>
            {publics.map((publica) => (
                //<li key = {publica.id}>{publica.title}</li>
                <Publishcard key={publica.id} publica={publica} />
            ))}
        </ul>
    );
}