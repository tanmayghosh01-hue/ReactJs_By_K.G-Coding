import { BsClipboardPlus } from "react-icons/bs";

import styles from "./AddTodo.module.css";
import { useContext, useRef } from "react";
import { TodoItemContext } from "../store/todo-items-store";





function AddTodo() {
  
  const { addNewTodo } = useContext(TodoItemContext)
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    console.log(`${todoName} due on: ${dueDate}`);
    addNewTodo(todoName, dueDate);

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container">
      <form className="row" onSubmit={addNewTodo}>
        <div className="col-5">
          <input type="text" 
          placeholder="Enter Todo Here" 
          id="input1"
          ref={todoNameElement}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" 
          id="date1" 
          ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            type="submit"
            className={`btn btn-success ${styles.addButton}`}
        
            onClick={handleAddButtonClicked}
          >
            <BsClipboardPlus />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
