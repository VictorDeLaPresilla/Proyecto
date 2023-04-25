export function Publishcard({ publica }) {
    const imageurl = "https://image.tmdb.org/t/p/w300" + publica.poster_path;
    return (
        <li>
            <img src = {imageurl} alt = {publica.title}/>
            {publica.title}
        </li>
    );
}