import React,{ Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import blue from 'material-ui/colors/blue';
const styles = {
  avatar: {
    background: blue[100],
    color: blue[600],
  },
};

class ToDoActionDialog extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Dialog open={ this.props.isOpen?this.props.isOpen:false }>
        <DialogTitle>Select Action</DialogTitle>
        <div>
          <List>
            <ListItem button onClick={()=>{
              this.props.handleEdit();
             }}>
              <ListItemText primary='編集' />
            </ListItem>
            <ListItem button onClick={()=>{
              this.props.handleDelete();
             }}>
              <ListItemText primary='削除' />
            </ListItem>
            <ListItem button onClick={()=>{
              this.props.hanleCancel();
             }}>
              <ListItemText primary='キャンセル' />
            </ListItem>
          </List>
        </div>
      </Dialog>
    )
  }
}

const SimpleDialogWrapped = withStyles(styles)(ToDoActionDialog);

export default SimpleDialogWrapped;
