import {connect} from "react-redux";
import {addTodo, toggleTodo, markAll, removeCompleted} from "./actions";
import {AppDispatch, RootState} from "./store.ts";
import TodoList from "./TodoList.tsx";

interface todoType {
  id: number,
  todo: string;
  isDone: boolean;
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todo as todoType[]
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addTodo: (text: string): void => dispatch(addTodo(text)),
  toggleTodo: (id: number): void => dispatch(toggleTodo(id)),
  markAll: (): void => dispatch(markAll()),
  removeCompleted: (): void => dispatch(removeCompleted())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);