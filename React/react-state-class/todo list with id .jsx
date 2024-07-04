
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todo, setTodo] = useState([{task: "sample task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

let addNewTask = () => {
 setTodo([...todo, {task: newTodo, id: uuidv4() } ]);
 setNewTodo("");
};
let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
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
                     <li key={todos.id}>{todos.task}</li>
    ))}
            </ul>
            <br></br>
        </div>
    )
}
