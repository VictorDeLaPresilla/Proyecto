import publics from "./publi.json";
export function Publish() {
    //console.log(publicaciones);
    return (
        <ul>
            {publics.map((publica) => 
                 <li>{publica.title}</li>
            )}
        </ul>
    );
}