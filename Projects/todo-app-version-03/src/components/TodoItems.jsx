import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { items, deleteTodo } = useContext(TodoItemContext);
  const todoItems = items;

  return (
    <div className="todo-item">
      {todoItems.map((item, index) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          deleteBtn={ deleteTodo }
          index={index}
        />
      ))}
    </div>
  );
};

export default TodoItems;
