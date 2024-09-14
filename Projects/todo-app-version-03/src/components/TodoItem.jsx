import { MdDelete } from "react-icons/md";
import styles from "./TodoItem.module.css"

function TodoItem({ todoName, todoDate, deleteBtn, index }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className={`btn btn-danger ${styles.deleteButton}`} onClick={() => deleteBtn(index)}>
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}


export default TodoItem;
