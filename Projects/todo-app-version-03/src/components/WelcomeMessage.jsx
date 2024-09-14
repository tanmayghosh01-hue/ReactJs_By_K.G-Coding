import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemContext);
  const todoItems = contextObj.items;
  return (
    todoItems.length===0 && <p className={`text-center welcome ${styles.welcome}`}>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;
