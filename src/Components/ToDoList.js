import React, { PropTypes } from 'react';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';


class ToDoList extends React.Component {
  renderToDoItem(todos) {
    return todos ? todos.map(item =>
      (
        <ListItem
          button
          onClick={() => {
            this.props.onClickItem(item);
          }}
        >
          <ListItemText primary={`${item.text}`} />
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => {
                this.props.handleDelete(item);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    ) : null;
  }
  render() {
    return (
      <List>
        {this.renderToDoItem(this.props.todos)}
      </List>
    );
  }
}

ToDoList.propTypes = {
  onClickItem: PropTypes.func,
  handleDelete: PropTypes.func,
  todos: PropTypes.shape({
    text: PropTypes.string,
  }),
};

ToDoList.defaultProps = {
  onClickItem: null,
  handleDelete: null,
  todos: null,
};


export default withStyles(null)(ToDoList);
