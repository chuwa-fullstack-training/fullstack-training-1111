import { changeTodo } from "./actions";
import { connect } from "react-redux";

function TodoItems( props ) {
  const { todo, finished, changeTodo } = props;

  const clickCheckbox = (e) => {
    const id = e.target.id;
    changeTodo(id);
  };

  return (
    <div>
      {
        todo.map((item, index) => {
          return (
            <div>
              <input type="checkbox" onChange={clickCheckbox} checked={finished[index]} id={index} />
              {item}
            </div>
          )
        })
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    todo: state.item,
    finished: state.finished
  };
}

function mapDispatchToProps(dispatch) { 
  return { 
    changeTodo: (value) => dispatch(changeTodo(value)), 
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);