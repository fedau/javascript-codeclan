import './song.css'


const Song =({song, position}) => {
    return <li> <span className="position">{position}</span> 
    <span className="title">{song["im:name"].label}
    </span> <span className="artist">{song["im:artist"].label}</span> </li>

}

export default Song