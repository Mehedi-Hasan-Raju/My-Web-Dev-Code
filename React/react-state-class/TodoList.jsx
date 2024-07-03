
import { useState } from "react";

export default function TodoList() {
    let [todo, setTodo] = useState(["sample task"])
    let [newTodo, setNewTodo] = useState("");

let addNewTask = () => {
 setTodo([...todo,newTodo]);
 setNewTodo("");
}
let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
}

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
                     <li>{todos}</li>
    ))}
            </ul>
            <br></br>
        </div>
    )
}
