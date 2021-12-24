import {useState, useRef} from 'react';
import './App.css';
import Item from '../../Components/Item';

function App() {

// --------------------STATES----------------------------------
  const [tasks, setTasks] = useState([
    {
      txt: 'Apprendre React',

    },
    {
      txt: 'Faire du sport',
    },
  ]);

  const inputRef = useRef();

// --------------------METHODS----------------------------------
  const removedClickHandler = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  }

  let cards = tasks.map((task, index) => {
    return(
      <Item 
      txt = {task.txt}
      deleteTask = {() => removedClickHandler(index)}
      key={index}
      />
    )
  })

  const addTask = (e) => {
    e.preventDefault();
    const newArr = [...tasks];
    const newTodo = {};
    newTodo.txt = e.target[0].value;
    newArr.push(newTodo);
    setTasks(newArr);
    inputRef.current.value="";
  }

  // --------------------RETURN----------------------------------
  return (
    <div className="App">
{/*-------------------- TITLE --------------------------*/}
      <header>
        <span>TO-DO</span>
      </header>

{/*---------------------- FORM ----------------------------*/}
      <div className="add">
        <form
        onSubmit={(e) => addTask(e)}
        >
          <input type="text" placeholder="Que souhaitez-vous ajouter ?" ref={inputRef}/>
          <button type="submit">
            Ajouter
          </button>
        </form>
      </div>

{/*------------------------------ TASKS --------------------------*/}
    {cards}
  </div>
  );
}

export default App;
