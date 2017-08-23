import React, { PropTypes } from 'react';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';

function ToDoActionDialog({ isOpen, handleDelete, handleCancel }) {
  return (
    <Dialog open={isOpen ? this.props.isOpen : false}>
      <DialogTitle>Select Action</DialogTitle>
      <div>
        <List>
          <ListItem
            button
            onClick={() => {
              this.props.handleEdit();
            }}
          >
            <ListItemText primary="編集" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleDelete();
            }}
          >
            <ListItemText primary="削除" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleCancel();
            }}
          >
            <ListItemText primary="キャンセル" />
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
}

ToDoActionDialog.propTypes = {
  isOpen: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleCancel: PropTypes.func,
};

ToDoActionDialog.defaultProps = {
  isOpen: false,
  handleDelete: null,
  handleCancel: null,
};

const SimpleDialogWrapped = withStyles(null)(ToDoActionDialog);

export default SimpleDialogWrapped;
