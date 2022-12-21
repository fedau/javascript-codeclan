import {useState, useEffect} from 'react'

import './App.css';

function App() {

  const [number, setNumber] = useState(1)
  const[fizzbuzz, setFizzbuzz] = useState("")



  useEffect(() => {
      if (number % 3 === 0 && number % 5 === 0){
        setFizzbuzz("FIZZBUZZ")}
       
      else if (number % 5 === 0){
        setFizzbuzz("BUZZ")}
       
      else if (number % 3 === 0){
        setFizzbuzz("FIZZ")}
      
      else {
        setFizzbuzz(number)
      }
     
  },[number])

  const handleInc = () => {
  setNumber(number +1)

  }
  const handleDec = () => {
  setNumber(number -1)


  }



  return (
    <div className='wrapper'>
    
      <div className='buttons'>

    <button value={number} onClick={handleInc}> + </button>
    <button value={number} onClick={handleDec}> - </button>
      </div>
    <div className='text'>  
    <h2>Number is: {number}</h2>
    <h2>It is : {fizzbuzz}</h2>
    
    </div>
    
    </div>
  );
}

export default App;
