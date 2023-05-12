import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEditing((prevState) => !prevState);

    dispatch(updateTodo(todo._id, text));
  };
  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "#000" : "",
      }}
    >
      <span
        style={{
          display: editing ? "none" : "",
        }}
      >
        {todo.data}
      </span>
      <form
        style={{
          display: editing ? "inline" : "none",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <FontAwesomeIcon icon={faTrashCan} />
      </span>
      <span
        className="icon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <FontAwesomeIcon icon={faPen} />
      </span>
    </li>
  );
};

export default Todo;
