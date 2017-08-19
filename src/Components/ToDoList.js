'use strict';

import React from 'react';
import { withStyles } from 'material-ui/styles';
import List,{
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

class ToDoList extends React.Component{

  render(){
    return(
      <List>
        {this.renderToDoItem(this.props.todos)}
      </List>
    )
  }

  renderToDoItem(todos){
    return todos?todos.map((item,index,array)=>{
      return (
        <ListItem
          button
          onClick={()=>{
            this.props.onClickItem(item);
          }} >
          <ListItemText primary={`${item.text}`} />
          <ListItemSecondaryAction>
            <IconButton
              onClick={()=>{
                this.props.handleDelete(item);
              }}>
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    }):null;
  }
}
export default withStyles(null)(ToDoList);
