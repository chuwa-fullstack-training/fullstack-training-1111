import { addToList } from "./actions";
import { connect } from "react-redux";

function TodoInput( props ) {
    const addItem = (e) => {
        if (e.key === 'Enter') {
          props.addToList(e.target.value);
        }
      };

    return (
        <input placeholder='Type a todo and hit enter' onKeyDown={addItem} className='itemInput'></input>
    )
}

function mapStateToProps(state) {
  return {
    item: state.item,
    finished: state.finished
  };
}

function mapDispatchToProps(dispatch) { 
  return { 
    addToList: (value) => dispatch(addToList(value)), 
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);