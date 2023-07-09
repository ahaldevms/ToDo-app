import {useState} from 'react'
import './App.css';

function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  const [discarded, setDiscarded] = useState([]);
  const [finished, setFinished] = useState([]);


  const handleCheck = (id) => {
    const updatedTodos = toDos.map((obj) => {
      if (obj.id === id) {
        obj.status = true;
        setFinished([...finished, obj]);
        return null;
      }
      return obj;
    });
    setTodos(updatedTodos.filter(obj => obj !== null));
  };


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
          <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." onKeyPress={(e) => {
            if(e.key === "Enter"){
              setTodos([...toDos,{id:Date.now() , text:toDo , status:false}])
            }
          }}/>
          <i onClick={() => setTodos([...toDos,{id:Date.now() , text:toDo , status:false , dis_status:false}])} className="fas fa-plus"></i>
        </div>
      </div>
      


{/* Finished list*/}
      <div className='Dos' >
        <h2>Finished</h2>

        <div className="Finished">
            
            {finished.map((obj) => {
              if (obj.status){
                return(
                  <div className="todo">
                    <p>{obj.text}</p>
                  </div>
                )
              }
              return null
            })}
            

        </div>

      </div>


{/* discard list*/}
      <div className='Discard' >
        <h2>Discarded</h2>
          <div className="dlete">
              {discarded.map((obj) => {
                if(obj.dis_status){
                  return(
                    <div className="todo">
                      <p> {obj.text} </p>
                    </div>
                  )
                }
              })}
          </div>

      </div>


{/* Active list*/}
      <div className='to-dos' >
        <h2>To-Dos</h2>
      <div className="todos">
          { toDos.map((obj) => {

            return(

          <div className="todo">
            <div className="left">
            <i  onClick={
                (e) => handleCheck(obj.id) } 
              class="fa-solid fa-check" 
              style ={{marginLeft : "1rem", color :"rgb(34, 138, 53)"}} ></i>
              
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={
                () => {
                  setTodos(toDos.filter(obj2 => obj2.id !== obj.id));
                  setDiscarded([...discarded, { id: Date.now(), text: obj.text, dis_status: true }]);
                } } 
              
              className="cross fas fa-times"></i>
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
