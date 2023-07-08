import {useState} from 'react'
import './App.css';

function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  return (
    <div className="app">
      <div className='add_todo'>
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h4>"The way we spend our time defines who we are"</h4>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => setTodos([...toDos,toDo])} className="fas fa-plus"></i>
        </div>
      </div>
      



      <div className='Dos' >
        <h2>Finished</h2>
        <div className="Finished">
            <div className="todo">
              
              <p>Rect tutorial</p>
              
            </div>
          </div>

      </div>

      <div className='Discard' >
      <h2>Discarded</h2>
        <div className="dlete">
            <div className="todo">
              
              <p>Rect tutorial</p>
              
            </div>
          </div>

      </div>

      <div className='to-dos' >
        <h2>To-Dos</h2>
      <div className="todos">
          { toDos.map((value) => {

            return(

          <div className="todo">
            <div className="left">
              <input style ={{marginLeft : "1rem"}} type="checkbox" name="" id="" />
              <p>{value}</p>
            </div>
            <div className="right">
              <i className="cross fas fa-times"></i>
            </div>
          </div>
            )
          
          }) }


        </div>
      </div>

    </div>
  );
}

export default App;
