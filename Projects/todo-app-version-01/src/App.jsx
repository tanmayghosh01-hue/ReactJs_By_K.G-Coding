import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
// import "./Home.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="todo-item">
        <TodoItem1 />
        <TodoItem2 />
      </div>
      
    </center>
  );
}

export default App;
