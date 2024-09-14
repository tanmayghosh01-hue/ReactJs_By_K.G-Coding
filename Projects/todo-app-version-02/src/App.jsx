import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem"
// import "./Home.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/24"
    }, {
      name: "Go to Collage",
      dueDate: "4/10/24"
    }, {
      name: "Eat Papitas",
      dueDate: "right now"
    }
  ]



  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
      
    </center>
  );
}

export default App;
