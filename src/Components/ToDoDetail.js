import React, { PropTypes } from 'react';
import { withStyles } from 'material-ui/styles';


function ToDoDetail({ todo }) {
  return (
    <div>
      <h1>ToDoDetail !!</h1>
      <ul>
        <li>{`id:${todo.id}`}</li>
        <li>{`text:${todo.text}`}</li>
        <li>{`completed:${todo.completed}`}</li>
      </ul>
      <button type="button" onClick={() => { this.props.handleGoBack(); }}>go back</button>
    </div>
  );
}

ToDoDetail.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

ToDoDetail.defaultProps = {
  todo: null,
};

export default withStyles(null)(ToDoDetail);
