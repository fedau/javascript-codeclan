import React , {useState, useEffect} from 'react'


const Filter = ({filterData}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        filterData(searchTerm);
    }, [searchTerm])

  return (
    <div>
        
        <input type="text" value={searchTerm} onChange={handleInputChange}/>
      
    </div>
  )
}

export default Filter
