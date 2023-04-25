
import { Publishcard } from "./Publishcard";
import publics from "./publi.json";
export function Publish() {
    //console.log(publicaciones);
    return (
        <ul>
            {publics.map((publica) => (
                //<li key = {publica.id}>{publica.title}</li>
                <Publishcard key = {publica.id} publica={publica}/>
            ))}
        </ul>
    );
}