import './App.css';
import {useState} from 'react'

function App() {

const [greeting, setGreeting] = useState("Hello programmer"); 
const [total, setTotal] = useState(0);
const handleClick = (name) => {
  setGreeting("Hello button clicker your name is: " +name )
}
const deposit = () =>{
  setTotal(total +10)
}
const withdraw = () =>{
  if (total > 0){
  setTotal(total - 10)
}}
  
  return (
<div className='body'>

<h1> {greeting} </h1>
<button onClick = {() => handleClick("Fedau")}>Change greeting</button>
<p>Total: £{total}</p>
<button onClick={deposit}>Deposit</button>
<button onClick={withdraw}>Withdraw</button>

</div>
);
}

export default App;
