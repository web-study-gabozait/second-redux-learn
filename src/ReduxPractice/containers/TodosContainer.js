import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../Todos";
import { addTodo, toggleTodo } from "../../../../modules/todos";

const TodosContainer = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);

  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
