import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem"
// import "./Home.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import TodoItems from "./components/TodoItems";
import { useState, useRef, useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemContext } from "./store/todo-items-store";


const todoItemsReducer = (action) => {
  return [];
}

function App() {

  const [currentVal, setCurrentVal] = useState([]);
  const [newTodoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const noOfUpdates = useRef(0);

  
  // console.log(currentVal);


  const addNewTodo = (name ,dueDate) => {

    noOfUpdates.current += 1;


    // let newItems = [...currentVal, {
    //   name: name,
    //   dueDate: dueDate
    // }]


    // input.value = "";
    // date.value = "";

    setCurrentVal((currValue) => [
      ...currValue,
      {
        name: name,
        dueDate: dueDate
      }
    ]);

    // console.log(event);
    console.log("No of Updates ", noOfUpdates.current);
    // event.preventDefault();

    console.log("on app component",name, dueDate);

  }

  const deleteTodo = (index) => {
    console.log(index);
    let newItems  = [...currentVal];
    if (index == 0){
      newItems.splice(index,index + 1);
    } else {
      newItems.splice(index,index);
    }
    
    setCurrentVal(newItems);
    // console.log(currentVal);
  }

  const defaultTodoItems = [{name:"buy ghee", dueDate:"Today"}]


  return (
    <TodoItemContext.Provider value={{
      items: currentVal,
      addNewTodo,
      deleteTodo
    }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo/>
        <WelcomeMessage/>
        <TodoItems />
        
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
