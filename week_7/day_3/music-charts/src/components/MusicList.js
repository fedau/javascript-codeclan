import Song from "./Song"

const MusicList = ({songs}) => {

    const musicItem = songs.map((song, index) =>{
        return <Song song={song} key={index} position={index +1}/>
    })
    return(
        <div>
            <ul>
                {musicItem}
            </ul>
        </div>
    )


}


export default MusicList