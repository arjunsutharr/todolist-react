import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";

import todoCardStyles from "./TodoCard.module.css";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  todoActions,
  toggleStatus,
} from "../../redux/reducers/todoReducer";

function TodoCard({ todo }) {
  const dispatch = useDispatch();
  // console.log(todo);
  return (
    <div className={todoCardStyles.container}>
      <p className={todoCardStyles.title}>{todo.title}</p>
      <p
        className={[
          todoCardStyles.status,
          todo.completed
            ? todoCardStyles.statusCompleted
            : todoCardStyles.statusIncomplete,
        ].join(" ")}
      >
        {todo.completed ? "Completed" : "Pending"}
      </p>
      <div className={todoCardStyles.editButtons}>
        <span
          onClick={() => dispatch(deleteTodo(todo.id))}
          className={todoCardStyles.button}
        >
          <MdDeleteForever />
        </span>
        <span
          onClick={() => dispatch(todoActions.setEditTodo(todo))}
          className={todoCardStyles.button}
        >
          <TbEdit />
        </span>
      </div>
      <button
        onClick={() => dispatch(toggleStatus(todo))}
        className={
          (`${todoCardStyles.button}`, `${todoCardStyles.toggleButton}`)
        }
      >
        {todo.completed ? "Mark as pending" : "Mark as complete"}
      </button>
    </div>
  );
}

export default TodoCard;
