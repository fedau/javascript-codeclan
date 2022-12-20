import React from 'react';
import SingleFilm from "./SingleFilm"



const FilmList = ({films}) => {

        const filmNodes = films.map(film => {
            return(
                <SingleFilm key={film.id} name={film.name} url={film.url}/>
             )
        })

   

    return(
        <>

        <ul>
        {filmNodes}

        </ul>
        </>
    )
}

export default FilmList