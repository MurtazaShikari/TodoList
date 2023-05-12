import { useEffect } from "react";
import { deleteTodo, getAllTodos } from "../redux/actions/index";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/type";
import { useDispatch, useSelector } from "react-redux";
import Zoom from "react-reveal/Zoom";
import Todo from "./Todo";
import Tabs from "./Tabs";

export const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  const getTodo = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };

  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <article>
      <Zoom>
        <div>
          <Tabs currentTab={currentTab} />
          {todos.some((todo) => todo.done) ? (
            <Zoom>
              <button onClick={removeDoneTodos} className="button clear">
                Remove Done Todos
              </button>
            </Zoom>
          ) : null}
        </div>
        <ul>
          {getTodo().map((todo, key) => (
            <Todo todo={todo} key={key} id={todo._id} />
          ))}
        </ul>
      </Zoom>
    </article>
  );
};

export default Todos;
