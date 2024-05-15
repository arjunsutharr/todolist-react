import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  editTodo,
  todoActions,
  todoSelector,
} from "../../redux/reducers/todoReducer";
import searchStyles from "./Search.module.css";

function Search() {
  const dispatch = useDispatch();
  const { todoInputText, todoForEdit } = useSelector(todoSelector);
  const handleCreateTodo = () => {
    dispatch(addTodo(todoInputText));
  };

  return (
    <>
      <p className="appTitle">To Dos</p>
      <div className={searchStyles.container}>
        <input
          className={searchStyles.input}
          value={todoInputText}
          onChange={(e) => dispatch(todoActions.setInputText(e.target.value))}
        />
        {todoForEdit ? (
          <button
            onClick={() =>
              dispatch(editTodo({ ...todoForEdit, title: todoInputText }))
            }
            className={searchStyles.button}
          >
            Update Todo
          </button>
        ) : (
          <button
            onClick={() => handleCreateTodo()}
            className={searchStyles.button}
          >
            Create Todo
          </button>
        )}
      </div>
    </>
  );
}

export default Search;
