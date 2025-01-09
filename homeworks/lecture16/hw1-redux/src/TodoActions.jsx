import { clearAllTodo, markAllTodo } from "./actions";
import { connect } from "react-redux";

function TodoActions( props ) {
  const { finished, clearAllTodo, markAllTodo } = props;

  const clearTodo = () => {
    clearAllTodo();
  };

  const markTodo = () => {
    markAllTodo();
  };

  const getRemaining = () => {
    return finished.filter((item) => !item).length;
  };

    return (
      <>
        <div className="card">
          {getRemaining()} remaining
          <button onClick={clearTodo}>Clear Completed Todos</button>
        </div>
        <div>
          <input type="checkbox" onChange={markTodo} checked={getRemaining() === 0}/>
          Mark all as done
        </div>
      </>
    )
}

function mapStateToProps(state) {
  return {
    finished: state.finished
  };
}

function mapDispatchToProps(dispatch) { 
  return { 
    clearAllTodo: () => dispatch(clearAllTodo()), 
    markAllTodo: () => dispatch(markAllTodo()), 
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoActions);