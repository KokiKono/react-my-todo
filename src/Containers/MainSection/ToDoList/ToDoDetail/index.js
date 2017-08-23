import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Detail from '../../../../Components/ToDoDetail';

function ToDoDetailSection({ match, todos, history }) {
  const todo = todos.find(item => item.id === Number(match.params.id));

  return (
    <Detail todo={todo} handleGoBack={() => { history.goBack(); }} />
  );
}

ToDoDetailSection.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  todos: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

ToDoDetailSection.defaultProps = {
  match: null,
  todos: null,
  history: null,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default withRouter(connect(mapStateToProps, null)(ToDoDetailSection));
