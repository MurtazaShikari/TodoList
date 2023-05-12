import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

export const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <article>
      <ul>
        {todos.map((todo, key) => (
          <Todo todo={todo} key={key} id={todo._id} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
