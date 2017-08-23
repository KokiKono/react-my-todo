import React, { PropTypes } from 'react';
import { withStyles } from 'material-ui/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import ToDoList from '../../../Components/ToDoList';
import ToDoActionDialog from '../../../Components/ToDoActionDialog';
import * as TodoActions from '../../../Actions';
import AddToDoSection from '../AddToDoSection';
import Detail from './ToDoDetail/';

const styles = {
  addFab: {
    position: 'fixed',
    right: '5%',
  },
};
class ToDoListSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  renderToDoList() {
    return (
      <div>
        <ToDoList
          todos={this.props.todos}
          onClickItem={(item) => {
            const { match } = this.props;
            this.props.history.push(`${match.url}/${item.id}`);
          }}
          handleDelete={(item) => {
            this.props.actions.deleteTodo(item.id);
          }}
        />
        <ToDoActionDialog
          isOpen={this.state.isOpen}
          handleEdit={() => {
            this.setState({ isOpen: false });
          }}
          handleDelete={() => {
            this.setState({ isOpen: false });
            this.props.actions.deleteTodo(this.props.actionToDo.id);
          }}
          hanleCancel={() => {
            this.setState({ isOpen: false });
          }}
        />
        <AddToDoSection
          handleSave={this.props.actions.addTodo}
        />
      </div>
    );
  }

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.url}`} render={() => (this.renderToDoList())} />
        <Route path={`${match.url}/:id`} component={Detail} />
      </Switch>
    );
  }
}

ToDoListSection.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  todos: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  actionToDo: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  actions: PropTypes.shape({
    deleteTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
  }),
};

ToDoListSection.defaultProps = {
  match: null,
  todos: null,
  history: null,
  actionToDo: null,
  actions: null,
};

const MainSectionWrapped = withStyles(styles)(ToDoListSection);

const mapStateToProps = state => ({
  todos: state.todos,
  actionToDo: state.actionToDo,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainSectionWrapped));
