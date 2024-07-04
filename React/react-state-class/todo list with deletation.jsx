
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todo, setTodo] = useState([{task: "sample task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

let addNewTask = () => {
 setTodo ((prevTodo) => {
     return ([...prevTodo, {task: newTodo, id: uuidv4() } ]);
 });
 setNewTodo("");
};
let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
};

let deletTodo = (id) => {
    setTodo(todo.filter((todos) => todos.id !=id));
};

    return (
        <div>
            <input placeholder="add a task" value={newTodo}  onChange={updateTodoValue}></input><br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task To do</h4>
            <hr></hr>
            <ul>
                {
                  todo.map((todos) => (
                     <li key={todos.id}>
                     <span>{todos.task}</span>   
                     &nbsp; &nbsp; &nbsp; &nbsp;
                     <button onClick  = { () => deletTodo(todos.id)}>Delete</button>
                     </li>
    ))}
            </ul>
            <br></br>
        </div>
    )
}
