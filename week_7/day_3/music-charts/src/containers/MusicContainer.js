import React, { useState, useEffect } from 'react';
import MusicList from '../components/MusicList';



const MusicContainer = () => {
    const [songs, setSongs] = useState([])
    // const [selectedSong, setSelectedSong] = useState(null)



    useEffect(() =>{
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => {
            console.log(songs.feed.entry);
            setSongs(songs.feed.entry)
        }
            )

    }
    return(

        <>
        <MusicList songs={songs}/>
        <h2>this is the page</h2>
        </>
    )



}


export default MusicContainer
