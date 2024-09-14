import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="todo-item">
      {todoItems.map((item) => <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} />)}
    </div>
  );
};

export default TodoItems;
