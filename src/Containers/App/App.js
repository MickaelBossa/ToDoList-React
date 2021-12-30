import {useState, useRef, useEffect} from 'react';
import './App.css';
import Item from '../../Components/Item';
import axios from '../../axios-firebase';

function App() {

// --------------------STATES----------------------------------
  const [tasks, setTasks] = useState([]);

  const inputRef = useRef();

// -------------------USEEFFECT--------------------------------

useEffect(() => {
  axios.get('/tasks.json')
    .then(response => {
      const tasksArray = [];

      for(let key in response.data) {
        tasksArray.push({
          ...response.data[key],
          id: key
        })
      }
      setTasks(tasksArray);
    })
    .catch(error => {
      console.log(error);
    })
}, []);

// --------------------METHODS----------------------------------
  const removedClickHandler = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);

    axios.delete('/tasks/' + tasks[index].id + '.json')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const checkboxHandler = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !tasks[index].done;
    setTasks(newTasks)

    axios.put('/tasks/' + tasks[index].id + '.json', tasks[index])
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  let cards = tasks.map((task, index) => {
    return(
      <Item 
      txt={task.txt}
      deleteTask={() => removedClickHandler(index)}
      key={index}
      done={task.done}
      doneClicked={() => checkboxHandler(index)}
      />
    )
  })

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      txt: e.target[0].value,
      done: false
    };
    setTasks([...tasks, newTask]);
    inputRef.current.value="";

    axios.post('/tasks.json', newTask)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
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
          <input autoFocus type="text" placeholder="Que souhaitez-vous ajouter ?" ref={inputRef}/>
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
