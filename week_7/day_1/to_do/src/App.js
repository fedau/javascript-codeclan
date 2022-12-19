import React, {useState}  from 'react';
import './App.css';

function App() {
  // setup tasks
  const [tasks, setTasks] = useState([
    {name: "Make app", isDone: false, stakeLevel: "high"},
    {name: "add extensions", isDone: true, stakeLevel: "low"},
    {name: "go home", isDone: false, stakeLevel: "low"},

  ])

  const taskDone = (index) => {
    const copyTasks = [...tasks]
    copyTasks[index].isDone = true
    setTasks(copyTasks)
  }

// render single task
  const singleTask = tasks.map((task, index) => {
    return <li key={index} className={task.stakeLevel === "high" ? "high" : "low"}> <span> {task.name} {task.stakeLevel}</span>
    {task.stakeLevel === "high" ? <span className='high'>Task is Important</span> : <span className='low' >Task not important</span>}
    {task.isDone ? <span className='done'>Complete</span> : <button onClick={() =>taskDone(index)}>Complete Task</button>}
    </li>

  });
// empty input field take out the input
  const [newTask, setNewTask] = useState("")
  const [newRadio, setNewRadio] = useState("")

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, isDone: false, stakeLevel: newRadio})
    setTasks(copyTasks)
    setNewTask("")
  }
  const handleRadioInput = (event) => {
    setNewRadio( event.target.value);
  }

  
  return (
    <div className="App">
      <h1>ToDo's</h1>

      <ul>{singleTask}</ul>
    <form onSubmit={saveNewTask}>
      <label htmlForm="new-task"> Add new Task</label>
      <input id= "new-task" type="text" value= {newTask} onChange={handleTaskInput}/>
     <div >
      <input id='high' type="radio" value="high" name="stakeLevel" onChange={handleRadioInput} /> High Priority
        <input id='low' type="radio" value="low" name="stakeLevel" onChange={handleRadioInput} /> Low Priority
     </div>
      <input type="submit" value="Save Task" />

    </form>
    </div>
  );
}

export default App;
