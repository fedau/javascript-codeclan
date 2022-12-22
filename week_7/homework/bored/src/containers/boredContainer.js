import {useEffect, useState} from 'react'
import BoredItem from '../components/BoredItem';

const BoredContainer =() => {

    const [idea, setIdea] = useState("");

    const fetchIdea = function(){
        fetch("https://www.boredapi.com/api/activity")
        .then(resp => resp.json())
        .then(data => setIdea(data))
    }

    useEffect(() => {
        fetchIdea()
    },[])

    return(
        <div className='Wrapper'>
        <BoredItem idea={idea} onClick={fetchIdea}/>
        {/* <button onClick={fetchIdea} > Still Bored give me something else</button> */}
        </div>
    )

}


export default BoredContainer