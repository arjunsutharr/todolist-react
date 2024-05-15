import { useEffect } from "react";
import { getAllTodos, todoSelector } from "../../../redux/reducers/todoReducer";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "../../../Components/card/TodoCard";
import todosStyles from "./Todos.module.css";

function Todos() {
  const dispatch = useDispatch();
  const { todos } = useSelector(todoSelector);
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div className={todosStyles.container}>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Todos;
